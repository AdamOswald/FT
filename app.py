from diffusers import AutoencoderKL, UNet2DConditionModel, StableDiffusionPipeline, StableDiffusionImg2ImgPipeline, DPMSolverMultistepScheduler
import gradio as gr
import torch
from PIL import Image
import utils
import datetime
import time
import psutil

start_time = time.time()
is_colab = utils.is_google_colab()

class Model:
    def __init__(self, name, path="", prefix=""):
        self.name = name
        self.path = path
        self.prefix = prefix
        self.pipe_t2i = None
        self.pipe_i2i = None

models = [
     Model("Arcane", "nitrosocke/Arcane-Diffusion", "arcane style"),
     Model("Archer", "nitrosocke/archer-diffusion", "archer style"),
     Model("Elden Ring", "nitrosocke/elden-ring-diffusion", "elden ring style"),
     Model("Spider-Verse", "nitrosocke/spider-verse-diffusion", "spiderverse style"),
     Model("Modern Disney", "nitrosocke/modern-disney-diffusion", "modern disney style"),
     Model("Classic Disney", "nitrosocke/classic-anim-diffusion", "classic disney style"),
     Model("Pony Diffusion", "AstraliteHeart/pony-diffusion", "pony style"),
     Model("Robo Diffusion", "nousr/robo-diffusion", "robo style"),
     Model("Cyberpunk Anime", "AdamOswald1/Cyberpunk-Anime-Diffusion", "cyberpunk style"),
     Model("Tron Legacy", "dallinmackay/Tron-Legacy-diffusion", "trnlgcy"),
     Model("Dark Souls", "Guizmus/DarkSoulsDiffusion", "dark souls style"),
     Model("Space Machine", "rabidgremlin/sd-db-epic-space-machine", "EpicSpaceMachine"),
     Model("Spacecraft", "rabidgremlin/sd-db-epic-space-machine, Guizmus/Tardisfusion", "EpicSpaceMachine, Classic Tardis style, Modern Tardis style"),
     Model("TARDIS", "Guizmus/Tardisfusion", "Classic Tardis style, Modern Tardis style"),
     Model("TARDIS Interior", "Guizmus/Tardisfusion", "Tardis Box style"),
     Model("Spacecraft Interior", "Guizmus/Tardisfusion, rabidgremlin/sd-db-epic-space-machine", "Tardis Box style, EpicSpaceMachine"),
     Model("CLIP", "EleutherAI/clip-guided-diffusion", "CLIP"),
     Model("Face Swap", "felixrosberg/face-swap", "faceswap, faceswap with, faceswapped, faceswapped with, face on"),
     Model("Genshin Waifu", "crumb/genshin-stable-inversion, yuiqena/GenshinImpact, katakana/2D-Mix, Guizmus/AnimeChanStyle", "Female, female, Woman, woman, Girl, girl"),
     Model("Genshin", "crumb/genshin-stable-inversion, yuiqena/GenshinImpact, katakana/2D-Mix, Guizmus/AnimeChanStyle", ""),
     Model("Waifu", "hakurei/waifu-diffusion, flax/waifu-diffusion, technillogue/waifu-diffusion, Guizmus/AnimeChanStyle, katakana/2D-Mix", ""),
     Model("Pokémon", "lambdalabs/sd-pokemon-diffusers, svjack/Stable-Diffusion-Pokemon-en", ""),
     Model("Test", "AdamoOswald1/Idk", ""),
     Model("Anime", "Guizmus/AnimeChanStyle, katakana/2D-Mix", ""),
     Model("Beeple", "riccardogiorato/beeple-diffusion", "beeple style "),
     Model("Avatar", "riccardogiorato/avatar-diffusion", "avatartwow style "),
     Model("Poolsuite", "prompthero/poolsuite", "poolsuite style "),
     Model("Loving Vincent (Van Gogh)", "dallinmackay/Van-Gogh-diffusion", "lvngvncnt "),
     Model("Redshift renderer (Cinema4D)", "nitrosocke/redshift-diffusion", "redshift style "),
     Model("Midjourney v4 style", "prompthero/midjourney-v4-diffusion", "mdjrny-v4 style "),
     Model("TrinArt v2", "naclbit/trinart_stable_diffusion_v2"),
     Model("Balloon Art", "Fictiverse/Stable_Diffusion_BalloonArt_Model", "BalloonArt "),
  ]
     
scheduler = DPMSolverMultistepScheduler(
    beta_start=0.00085,
    beta_end=0.012,
    beta_schedule="scaled_linear",
    num_train_timesteps=1000,
    trained_betas=None,
    predict_epsilon=True,
    thresholding=False,
    algorithm_type="dpmsolver++",
    solver_type="midpoint",
    lower_order_final=True,
)

custom_model = None
if is_colab:
  models.insert(0, Model("Custom model"))
  custom_model = models[0]

last_mode = "txt2img"
current_model = models[1] if is_colab else models[0]
current_model_path = current_model.path

if is_colab:
  pipe = StableDiffusionPipeline.from_pretrained(current_model.path, torch_dtype=torch.float16, scheduler=scheduler, safety_checker=lambda images, clip_input: (images, False))

else: # download all models
  pipe = StableDiffusionPipeline.from_pretrained(current_model.path, torch_dtype=torch.float16, scheduler=scheduler)
  # print(f"{datetime.datetime.now()} Downloading vae...")
  # vae = AutoencoderKL.from_pretrained(current_model.path, subfolder="vae", torch_dtype=torch.float16)
  # for model in models:
  #   try:
  #       print(f"{datetime.datetime.now()} Downloading {model.name} model...")
  #       unet = UNet2DConditionModel.from_pretrained(model.path, subfolder="unet", torch_dtype=torch.float16)
  #       model.pipe_t2i = StableDiffusionPipeline.from_pretrained(model.path, unet=unet, vae=vae, torch_dtype=torch.float16, scheduler=scheduler)
  #       model.pipe_i2i = StableDiffusionImg2ImgPipeline.from_pretrained(model.path, unet=unet, vae=vae, torch_dtype=torch.float16, scheduler=scheduler)
  #   except Exception as e:
  #       print(f"{datetime.datetime.now()} Failed to load model " + model.name + ": " + str(e))
  #       models.remove(model)
  # pipe = models[0].pipe_t2i
  
if torch.cuda.is_available():
  pipe = pipe.to("cuda")

device = "GPU 🔥" if torch.cuda.is_available() else "CPU 🥶"

def error_str(error, title="Error"):
    return f"""#### {title}
            {error}"""  if error else ""

def custom_model_changed(path):
  models[0].path = path
  global current_model
  current_model = models[0]

def on_model_change(model_name):
  
  prefix = "Enter prompt. \"" + next((m.prefix for m in models if m.name == model_name), None) + "\" is prefixed automatically" if model_name != models[0].name else "Don't forget to use the custom model prefix in the prompt!"

  return gr.update(visible = model_name == models[0].name), gr.update(placeholder=prefix)

def inference(model_name, prompt, guidance, steps, width=512, height=512, seed=0, img=None, strength=0.5, neg_prompt=""):

  print(psutil.virtual_memory()) # print memory usage

  global current_model
  for model in models:
    if model.name == model_name:
      current_model = model
      model_path = current_model.path

  generator = torch.Generator('cuda').manual_seed(seed) if seed != 0 else None

  try:
    if img is not None:
      return img_to_img(model_path, prompt, neg_prompt, img, strength, guidance, steps, width, height, generator), None
    else:
      return txt_to_img(model_path, prompt, neg_prompt, guidance, steps, width, height, generator), None
  except Exception as e:
    return None, error_str(e)

def txt_to_img(model_path, prompt, neg_prompt, guidance, steps, width, height, generator):

    print(f"{datetime.datetime.now()} txt_to_img, model: {current_model.name}")

    global last_mode
    global pipe
    global current_model_path
    if model_path != current_model_path or last_mode != "txt2img":
        current_model_path = model_path

        if is_colab or current_model == custom_model:
          pipe = StableDiffusionPipeline.from_pretrained(current_model_path, torch_dtype=torch.float16, scheduler=scheduler, safety_checker=lambda images, clip_input: (images, False))
        else:
          pipe = StableDiffusionPipeline.from_pretrained(current_model_path, torch_dtype=torch.float16, scheduler=scheduler)
          # pipe = pipe.to("cpu")
          # pipe = current_model.pipe_t2i

        if torch.cuda.is_available():
          pipe = pipe.to("cuda")
        last_mode = "txt2img"

    prompt = current_model.prefix + prompt  
    result = pipe(
      prompt,
      negative_prompt = neg_prompt,
      # num_images_per_prompt=n_images,
      num_inference_steps = int(steps),
      guidance_scale = guidance,
      width = width,
      height = height,
      generator = generator)
    
    return replace_nsfw_images(result)

def img_to_img(model_path, prompt, neg_prompt, img, strength, guidance, steps, width, height, generator):

    print(f"{datetime.datetime.now()} img_to_img, model: {model_path}")

    global last_mode
    global pipe
    global current_model_path
    if model_path != current_model_path or last_mode != "img2img":
        current_model_path = model_path

        if is_colab or current_model == custom_model:
          pipe = StableDiffusionImg2ImgPipeline.from_pretrained(current_model_path, torch_dtype=torch.float16, scheduler=scheduler, safety_checker=lambda images, clip_input: (images, False))
        else:
          pipe = StableDiffusionImg2ImgPipeline.from_pretrained(current_model_path, torch_dtype=torch.float16, scheduler=scheduler)
          # pipe = pipe.to("cpu")
          # pipe = current_model.pipe_i2i
        
        if torch.cuda.is_available():
          pipe = pipe.to("cuda")
        last_mode = "img2img"

    prompt = current_model.prefix + prompt
    ratio = min(height / img.height, width / img.width)
    img = img.resize((int(img.width * ratio), int(img.height * ratio)), Image.LANCZOS)
    result = pipe(
        prompt,
        negative_prompt = neg_prompt,
        # num_images_per_prompt=n_images,
        init_image = img,
        num_inference_steps = int(steps),
        strength = strength,
        guidance_scale = guidance,
        width = width,
        height = height,
        generator = generator)
        
    return replace_nsfw_images(result)

def replace_nsfw_images(results):

    if is_colab:
      return results.images[0]
      
    for i in range(len(results.images)):
      if results.nsfw_content_detected[i]:
        results.images[i] = Image.open("nsfw.png")
    return results.images[0]

css = """.finetuned-diffusion-div div{display:inline-flex;align-items:center;gap:.8rem;font-size:1.75rem}.finetuned-diffusion-div div h1{font-weight:900;margin-bottom:7px}.finetuned-diffusion-div p{margin-bottom:10px;font-size:94%}a{text-decoration:underline}.tabs{margin-top:0;margin-bottom:0}#gallery{min-height:20rem}
"""
with gr.Blocks(css=css) as demo:
    gr.HTML(
        f"""
            <div class="finetuned-diffusion-div">
              <div>
                <h1>Finetuned Diffusion</h1>
              </div>
              <p>
               Demo for multiple fine-tuned Stable Diffusion models, trained on different styles: <br>
               <a href="https://huggingface.co/nitrosocke/Arcane-Diffusion">Arcane</a>, <a href="https://huggingface.co/nitrosocke/archer-diffusion">Archer</a>, <a href="https://huggingface.co/nitrosocke/elden-ring-diffusion">Elden Ring</a>, <a href="https://huggingface.co/nitrosocke/spider-verse-diffusion">Spider-Verse</a>, <a href="https://huggingface.co/nitrosocke/mo-di-diffusion">Modern Disney</a>, <a href="https://huggingface.co/nitrosocke/classic-anim-diffusion">Classic Disney</a>, <a href="https://huggingface.co/dallinmackay/Van-Gogh-diffusion">Loving Vincent (Van Gogh)</a>, <a href="https://huggingface.co/nitrosocke/redshift-diffusion">Redshift renderer (Cinema4D)</a>, <a href="https://huggingface.co/prompthero/midjourney-v4-diffusion">Midjourney v4 style</a>, <a href="https://huggingface.co/hakurei/waifu-diffusion">Waifu</a>, <a href="https://huggingface.co/lambdalabs/sd-pokemon-diffusers">Pokémon</a>, <a href="https://huggingface.co/AstraliteHeart/pony-diffusion">Pony Diffusion</a>, <a href="https://huggingface.co/nousr/robo-diffusion">Robo Diffusion</a>, <a href="https://huggingface.co/AdamOswald1/Cyberpunk-Anime-Diffusion">Cyberpunk Anime</a>, <a href="https://huggingface.co/dallinmackay/Tron-Legacy-diffusion">Tron Legacy</a>, <a href="https://huggingface.co/Fictiverse/Stable_Diffusion_BalloonArt_Model">Balloon Art</a> + in colab notebook you can load any other Diffusers 🧨 SD model hosted on HuggingFace 🤗.
              </p>
              <p>You can skip the queue and load custom models in the colab: <a href="https://colab.research.google.com/gist/qunash/42112fb104509c24fd3aa6d1c11dd6e0/copy-of-fine-tuned-diffusion-gradio.ipynb"><img data-canonical-src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab" src="https://camo.githubusercontent.com/84f0493939e0c4de4e6dbe113251b4bfb5353e57134ffd9fcab6b8714514d4d1/68747470733a2f2f636f6c61622e72657365617263682e676f6f676c652e636f6d2f6173736574732f636f6c61622d62616467652e737667"></a></p>
               Running on <b>{device}</b>{(" in a <b>Google Colab</b>." if is_colab else "")}
              </p>
              <p>You can also duplicate this space and upgrade to gpu by going to settings: <a style="display:inline-block" href="https://huggingface.co/spaces/anzorq/finetuned_diffusion?duplicate=true"><img src="https://img.shields.io/badge/-Duplicate%20Space-blue?labelColor=white&style=flat&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAP5JREFUOE+lk7FqAkEURY+ltunEgFXS2sZGIbXfEPdLlnxJyDdYB62sbbUKpLbVNhyYFzbrrA74YJlh9r079973psed0cvUD4A+4HoCjsA85X0Dfn/RBLBgBDxnQPfAEJgBY+A9gALA4tcbamSzS4xq4FOQAJgCDwV2CPKV8tZAJcAjMMkUe1vX+U+SMhfAJEHasQIWmXNN3abzDwHUrgcRGmYcgKe0bxrblHEB4E/pndMazNpSZGcsZdBlYJcEL9Afo75molJyM2FxmPgmgPqlWNLGfwZGG6UiyEvLzHYDmoPkDDiNm9JR9uboiONcBXrpY1qmgs21x1QwyZcpvxt9NS09PlsPAAAAAElFTkSuQmCC&logoWidth=14" alt="Duplicate Space"></a></p>
            </div>
        """
    )
    with gr.Row():
        
        with gr.Column(scale=55):
          with gr.Group():
              model_name = gr.Dropdown(label="Model", choices=[m.name for m in models], value=current_model.name)
              with gr.Box(visible=False) as custom_model_group:
                custom_model_path = gr.Textbox(label="Custom model path", placeholder="Path to model, e.g. nitrosocke/Arcane-Diffusion", interactive=True)
                gr.HTML("<div><font size='2'>Custom models have to be downloaded first, so give it some time.</font></div>")
              
              with gr.Row():
                prompt = gr.Textbox(label="Prompt", show_label=False, max_lines=2,placeholder="Enter prompt. Style applied automatically").style(container=False)
                generate = gr.Button(value="Generate").style(rounded=(False, True, True, False))


              image_out = gr.Image(height=512)
              # gallery = gr.Gallery(
              #     label="Generated images", show_label=False, elem_id="gallery"
              # ).style(grid=[1], height="auto")
          error_output = gr.Markdown()

        with gr.Column(scale=45):
          with gr.Tab("Options"):
            with gr.Group():
              neg_prompt = gr.Textbox(label="Negative prompt", placeholder="What to exclude from the image")

              # n_images = gr.Slider(label="Images", value=1, minimum=1, maximum=4, step=1)

              with gr.Row():
                guidance = gr.Slider(label="Guidance scale", value=7.5, maximum=15)
                steps = gr.Slider(label="Steps", value=25, minimum=2, maximum=75, step=1)

              with gr.Row():
                width = gr.Slider(label="Width", value=512, minimum=64, maximum=1024, step=8)
                height = gr.Slider(label="Height", value=512, minimum=64, maximum=1024, step=8)

              seed = gr.Slider(0, 2147483647, label='Seed (0 = random)', value=0, step=1)

          with gr.Tab("Image to image"):
              with gr.Group():
                image = gr.Image(label="Image", height=256, tool="editor", type="pil")
                strength = gr.Slider(label="Transformation strength", minimum=0, maximum=1, step=0.01, value=0.5)

    if is_colab:
      model_name.change(on_model_change, inputs=model_name, outputs=[custom_model_group, prompt], queue=False)
      custom_model_path.change(custom_model_changed, inputs=custom_model_path, outputs=None)
    # n_images.change(lambda n: gr.Gallery().style(grid=[2 if n > 1 else 1], height="auto"), inputs=n_images, outputs=gallery)

    inputs = [model_name, prompt, guidance, steps, width, height, seed, image, strength, neg_prompt]
    outputs = [image_out, error_output]
    prompt.submit(inference, inputs=inputs, outputs=outputs)
    generate.click(inference, inputs=inputs, outputs=outputs)

    ex = gr.Examples([
        [models[7].name, "tiny cute and adorable kitten adventurer dressed in a warm overcoat with survival gear on a winters day", 7.5, 50],
        [models[4].name, "portrait of dwayne johnson", 7.0, 75],
        [models[5].name, "portrait of a beautiful alyx vance half life", 10, 50],
        [models[6].name, "Aloy from Horizon: Zero Dawn, half body portrait, smooth, detailed armor, beautiful face, illustration", 7.0, 45],
        [models[5].name, "fantasy portrait painting, digital art", 4.0, 30],
    ], inputs=[model_name, prompt, guidance, steps, seed], outputs=outputs, fn=inference, cache_examples=False)

    gr.HTML("""
    <div style="border-top: 1px solid #303030;">
      <br>
      <p>Models by <a href="https://huggingface.co/nitrosocke">@nitrosocke</a>, <a href="https://twitter.com/haruu1367">@haruu1367</a>, <a href="https://twitter.com/DGSpitzer">@Helixngc7293</a>, <a href="https://twitter.com/dal_mack">@dal_mack</a>, <a href="https://twitter.com/prompthero">@prompthero</a> and others. ❤️</p>
      <p>This space uses the <a href="https://github.com/LuChengTHU/dpm-solver">DPM-Solver++</a> sampler by <a href="https://arxiv.org/abs/2206.00927">Cheng Lu, et al.</a>.</p><br>
<p>Space by: <a href="https://twitter.com/hahahahohohe"><img src="https://img.shields.io/twitter/follow/hahahahohohe?label=%40anzorq&style=social" alt="Twitter Follow"></a></p><br>
<a href="https://www.buymeacoffee.com/anzorq" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 45px !important;width: 162px !important;" ></a><br><br>
<p><img src="https://visitor-badge.glitch.me/badge?page_id=anzorq.finetuned_diffusion" alt="visitors"></p>
    </div>
    """)

print(f"Space built in {time.time() - start_time:.2f} seconds")

if not is_colab:
  demo.queue(concurrency_count=1)
demo.launch(debug=is_colab, share=is_colab)
