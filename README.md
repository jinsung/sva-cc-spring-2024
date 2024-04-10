# Creative Computing

- Spring, 2024
- Instructor: Jin Sung Yoo - <ujinsung@gmail.com>
- Time: Thursday, 6:30 PM - 9:20 PM
- Location: 209 E 23 St, 210 Studio

## DESCRIPTION

Building on the foundational knowledge gained in the first course, this second course will focus on programming techniques for generative design and digital interactions. The class will introduce mathematical principles that underlie our physical world to create natural simulation in the digital world. Additionally, we will examine various emerging techniques to understand how technologies create innovation in computer and human interactions.

## RESOURCES

- [P5.JS Reference](https://p5js.org/reference/)
- [Nature of Code](https://natureofcode.com/)
- [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [JS: The Definitive Guide](https://www.amazon.com/JavaScript-Definitive-Most-Used-Programming-Language/dp/1491952024)
- [Working with Data and APIs from Dan Shiffman](https://www.youtube.com/watch?v=DbcLg8nRWEg&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X)
- [ES6 & Beyond](https://github.com/getify/You-Dont-Know-JS/tree/1st-ed/es6%20%26%20beyond)

## COURSE REQUIREMENTS

- Attendance and class participation - 30%
- Assignments - 40%
- Final - 30%

## TOOLS

- [Visual Studio Code](https://code.visualstudio.com/)
- Terminal
- [Github](https://github.com/)
- [P5JS Editor](https://editor.p5js.org/)
- [Node.js](https://nodejs.org/en)

## SYLLABUS

### Week 1 -- New Tools

- Inspiration Sharing
- Code editor
  - VS Code
  - extensions: live preview, p5.vscode
  - Settings
    - disable : Editor:Accept suggestion on commit character
- Terminal
  - /Applications/Utilities/Terminal
  - cd, ls, mv, mkdir, pwd, clear, cp, and open
  - tab for autoComplite
  - up down arrow keys for your command history
- Version control
  - What is version control?
    - Tracking changes
    - Collaboration
    - Restoring previous work
  - Git
    - [Setup](https://docs.github.com/en/get-started/quickstart/set-up-git)
      - [Download](https://git-scm.com/downloads)
      - git config --global user.email "YOUR_EMAIL"
      - git init, git add, git commit, git status, git log, git remote, git pull, and git push
  - Github
    - Signup on github.com
    - Create a new repository
  - Git workflow
    - Clon, Commit, Push, Pull, and Pull Request
    - History of changes

### Week 2 -- HTML/CSS basic

- [Aaron Koblin](https://www.aaronkoblin.com/)
- Setup your workspace with the git repository
- HTML Basic
  - Document Object Model
  - script tag
  - HTML canvas & p5.js
- Basic CSS and style tag
  - tag, id, and class selector
  - CSS [reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
  - style override
- P5.js DOM
  - createElement, select, selectAll
  - Events - changed, input, mouse*
  - manipulating HTML elements
  - main and parant
  - Assignment: Create an interactive p5.js background for your webpage

### Week 3 -- Server side programming with WebSocket

- Presenters
  - Mina's inspo [1](https://www.instagram.com/tim_rodenbroeker/) [2](https://www.instagram.com/seohyo/?hl=en)
  - Inwoo's [inspo](https://generativetype.com/)
- Node and NPM
  - Install node
  - [What is Node.js](https://nodejs.org/en/about)
    - Javascript [run time environment](https://stackoverflow.com/questions/3710130/what-is-run-time-environment)
  - Server side programming
  - [WebSocket](https://en.wikipedia.org/wiki/WebSocket)

### Week 4 -- ECMAScript6 features

- [Free APIs](https://free-apis.github.io/#/categories)
- What is JSON?
- Arrow function expression
- Promise, then, async, and await
- More of Array
  - forEach(), sort(), filter(), map() etc.

### Week 5 -- Data Visualization with Citibike data

- Presenters:
  - Joe's [inspo](https://nahuelgerth.de/lab/typelabs)
  - Heesoo's inspo [1](https://experiments.withgoogle.com/) [2](https://www.creativeapplications.net/python/the-case-for-a-small-language-model-generative-ai-and-authorship/)
- [Try/Catch block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [Spread operator](https://fjolt.com/article/javascript-three-dots-spread-operator)
- Data file format (JSON, CSV)
- Citibike Data converter process (optional)
  - citibike [data](https://s3.amazonaws.com/tripdata/index.html)
  - Instruction
    - clone this repository.
    - download a [cvs](https://s3.amazonaws.com/tripdata/index.html) (I downloaded 202311-citibike-tripdata.csv.zip), unzip and add the csv file to ./examples/05/00-data-converter/data
    - open a terminal
    - cd examples/05/00-data-converter
    - npm install
    - node citibike.js
    - (optional) node addBorough.js
- citibike
  - Get a json file (2023-11-06.json or 2023-11-06-borough.json) from ./example/05/data/ to visualize

### Week 6 -- Physics - Vector / Force

- [Robert Hodgin](http://roberthodgin.com/)
- [Robert Hodgin - Vimeo](https://vimeo.com/flight404/)
- [football data api](https://rapidapi.com/api-sports/api/api-football)
- Vector
  - Vector vs Point
  - [Magnitude, Direction, Add, Subtract, Multiply and Divide](https://editor.p5js.org/jinsung/sketches/BJDUbJpa7)
- [Force = Acceleration x Mass](https://editor.p5js.org/jinsung/sketches/K_1gJXsf_)
- [Gravity](https://editor.p5js.org/jinsung/sketches/L7CliUcrQ)
- [Multiple Forces](https://editor.p5js.org/jinsung/sketches/KM9Ksfhn1)
- [Friction](https://editor.p5js.org/jinsung/sketches/9-jH3bINn)

### Week 7 -- Particle System 1

- Presenters:
- [Hee-Jin](https://ertdfgcvb.xyz/)
- [Guanyan](https://happycoding.io/tutorials/p5js/)
- Data Viz Assignment Due
- [Angry Particle?](https://editor.p5js.org/jinsung/sketches/B1d8CSJyE)
- [Particle System](https://editor.p5js.org/jinsung/sketches/Gn1YNnTkn)
- [Particle System / Noise](https://editor.p5js.org/jinsung/sketches/4wONJkuBy)
- [Particle System / Repulse](https://editor.p5js.org/jinsung/sketches/VX43gPQuD)
- [Particle System / Pixel Data](https://editor.p5js.org/jinsung/sketches/h-D0R-3-H)

### Week 8 -- Phsics Engine

- [Matter.js](https://brm.io/matter-js/)
- Matter.js basics
  - World, Engine, dynamic and staic Bodies
- OOP - Inheritance
- Physic homework

### Week 9 -- Phsics Engine 2

- Presenters: Roy and 
  - Progga [1](https://www.instagram.com/jzlabs/), [2](https://www.instagram.com/0x0074n0/), [3](https://www.instagram.com/vi_ne_te/), [4](https://affinelayer.com/pixsrv/), [5](https://www.imaginary.org/program/pink-trombone)
  - Roy [Etienne Jacob](https://bleuje.com/), [Andreas Gysin](https://ertdfgcvb.xyz/)
- Pinball game
- Matter.js Constraint
- Matter.js Mouse Constraint

### Week 10 -- AI/ML Basic

- Physic homework due
- [AI, ML, Deep Learning](https://docs.google.com/document/d/1hew_j0rq9oWt6ockDzEDyGaRIz-pHS7HFHZyvnZqiKE/)
- Leaning
- Deep Learning
- [Neural network](https://www.3blue1brown.com/lessons/neural-networks)
- [Teachable Machine](https://teachablemachine.withgoogle.com/)

### Week 11 -- AI/ML: Text

- Word Embeddings
  - [Embedding projector](http://projector.tensorflow.org/)
  - Representing text as numbers
  - Convert strings to numbers (vectorize the text) before feeding into the model
- Word2Vec
  - Technique in natural language processing (NLP) for obtaining vector representations of words.
  - [Blog by Jay Alammar](http://jalammar.github.io/illustrated-word2vec/)
- Universal Sentence Encoder
  - A [model](https://github.com/tensorflow/tfjs-models/tree/master/universal-sentence-encoder) that encodes text into 512-dimensional embeddings. The model is based on the Transformer
  - [Demo](https://storage.googleapis.com/tfjs-models/demos/toxicity/index.html)
- Sentiment
  - ML5 Demo
- LSTM/CharRNN
  - RNN - Recurrent Neural Networks
  - LSTM - Long Short-Term Memory Networks
  - [To learn more...](https://ayearofai.com/rohan-lenny-3-recurrent-neural-networks-10300100899b)
  - You can [train your own model](https://github.com/ml5js/training-charRNN) - ~3-5 hours on a laptop
  - Demo
- LLM
  - GPT - “Generative Pretrained Transformer”
  - [ChatGPT is a blur JPEG of the web](https://www.newyorker.com/tech/annals-of-technology/chatgpt-is-a-blurry-jpeg-of-the-web) by Ted Chiang
  - Use Transformer architecture, not RNN, LSTM
  - Hugging Face - [Transformer tutorial](https://huggingface.co/learn/nlp-course/chapter1/1)
  - [Intro to LLM](https://www.youtube.com/watch?v=zjkBMFhNj_g) by Andrej Karpathy
  - OpenAI [API](https://openai.com/blog/openai-api)
  - Google Cloud Platform [Vertex AI API](https://cloud.google.com/vertex-ai/docs/reference/rest)
  - Google AI Studio
    - [Freeform](https://aistudio.google.com/app/prompts/1cstRkVIt6C-pgRIZC0EmYjwORgHcWGPn)
    - [Structured](https://aistudio.google.com/app/prompts/1yDpnotfAlgPn1Y-PBsMLTJTuluavdxsc)


### Week 12 -- AI/ML: GenAI at the moment

- This is a moving target!
- [Hugging Face](https://huggingface.co/)
- Chatbot
  - [50 most visited tool](https://medium.com/@mkt.thdat/ai-industry-8988fa965acb)
  - [chatbot](https://chat.openai.com/) vs [targeted](https://quillbot.com/)
- Image
  - [MidJourney](https://www.midjourney.com/)
  - [Dall-e](https://openai.com/dall-e-3)
  - [Imagen](https://deepmind.google/technologies/imagen-2/)
  - [Paint to image](https://www.krea.ai/apps/image/realtime)
  - [Image enhancer](https://magnific.ai/)
  - [Face to all](https://huggingface.co/spaces/multimodalart/face-to-all)
- Video
  - [Genmo](https://www.genmo.ai/)
  - [Runway](https://research.runwayml.com/gen2)
  - [OpenAI Sora](https://openai.com/sora)
  - [Pika](https://pika.art/home)
  - [Emu/Meta - Generative Video Editing](https://ai.meta.com/blog/emu-text-to-video-generation-image-editing-research/)
  - [Animate Anyone](https://humanaigc.github.io/animate-anyone/)
  - [Masic Animate](https://showlab.github.io/magicanimate/)
- Audio
  - [Gen audio story](https://audiobox.metademolab.com/maker)
  - [MusicGen Model](https://huggingface.co/spaces/facebook/MusicGen)
  - [VEED](https://www.veed.io/tools/ai-music-generator)
  - [Suno - Make a song about ...](https://www.suno.ai/)
  - [ElevenLabs - Voice to voice](https://elevenlabs.io/voice-changer)
- Text to 3D
  - [Spline](https://spline.design/ai)
  - [Luma](https://lumalabs.ai/)
  - [LucidDreamer](https://github.com/EnVision-Research/LucidDreamer)
  - [DreamCraft3D - Image to 3d](https://mrtornado24.github.io/DreamCraft3D/)
- Companion
  - [Falling in Love with Replika?](https://replika.ai/)
  - [AI Companion Growth](https://a16z.com/how-are-consumers-using-generative-ai/)
  - [Meta AI](https://about.fb.com/news/2023/09/introducing-ai-powered-assistants-characters-and-creative-tools/)
  - [AI Avartar](https://www.synthesia.io/)
  - [Fashion Model](https://lalaland.ai/)
- Get Started
  - [Stable Diffusion](https://en.wikipedia.org/wiki/Stable_Diffusion)
  - [Hugging Face - Diffusers](https://huggingface.co/docs/diffusers/en/index)
  - [Stable Diffusion Model](https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0)
  - [Hugging Face - Spaces](https://huggingface.co/spaces)

### Week 13 -- 1:1

- [Schedule Sheet](https://docs.google.com/spreadsheets/d/1M1V0xIxizzpPIWnzNaCV1UlgNS9hcNNrR3gehgrsGKk/edit#gid=0)

### Week 14 -- 1:1

- [Schedule Sheet](https://docs.google.com/spreadsheets/d/1rHz7-0sWWh_5ZBkvxH-aalc1QfWJBs7eaccaAzT6Gu0/edit#gid=0)

### Week 15 -- Final Presentation

- Create a screen record your work, save in google drive, and send the link for the screenrecording.
- Send your code and screen record to my school email.
