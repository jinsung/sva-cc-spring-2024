import { HfInference } from 'https://esm.sh/@huggingface/inference';
let HF_TOKEN = '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';

const inference = new HfInference(HF_TOKEN);

const translated = await inference.translation({
   model: 't5-base',
   inputs: 'My name is Jin sung and I live in Seoul'
});

const textToImaged = await inference.textToImage({
  model: 'stabilityai/stable-diffusion-2',
  inputs: 'award winning high resolution photo of a giant tortoise/((ladybird)) hybrid, [trending on artstation]',
  parameters: {
    negative_prompt: 'blurry',
  }
})

console.log('translated: ', translated);
console.log('textToImaged: ', textToImaged);

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  
  background(200);
  for (let num of myArr) {
    fill(255, 0, 0);
    circle(num, 50, 30);
  }

}
