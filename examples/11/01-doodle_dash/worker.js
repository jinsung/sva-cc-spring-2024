import { pipeline, RawImage } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.16.1';

self.onmessage = e => {
  self.postMessage({status:'test'});
};
const classifier = null;
/*
const classifier = await pipeline(
      "image-classification", 
      'Xenova/quickdraw-mobilevit-small',
      { quantized: false });
const image = await RawImage.read('https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/ml-web-games/skateboard.png');
const output = await classifier(image.grayscale());
console.log(output);
*/

self.onmessage = async (event) => {
  const message = event.data;
  
  if (message.action === 'load') {
    classifier = await pipeline(
      "image-classification", 
      'Xenova/quickdraw-mobilevit-small',
      { quantized: false });
    self.postMessage({status: "ready"});
    return;
  }

  // Convert RGBA to grayscale, choose based on alpha channel
  const data = new Unit8ClampedArray(message.image.data.length / 4);
  for (let i = 0; i < data.length; ++i) {
    data[i] = message.image.data[i * 4 + 3];
  }
  const img = new RawImage(
    data, 
    message.image.width,
    message.image.height, 1);
  
  let result = await classifier(img).catch(error => {
    self.postMessage({
      status: "error", 
      data: error
    });
  });
  if (result === null) return;

  // Send the result back to the main thread
  self.postMessage({
    status: "result",
    data: result
  });
};