'use strict';

const fs = require('fs');
const util = require('util');
const fsWriteFile = util.promisify(fs.writeFile);
let newColor;
let newPixels;
let bufferArr;

const transformGreyscale = bmp => {
  
  console.log('Transforming bitmap into greyscale');
  
  //TODO: Figure out a way to validate that the bmp instance is actually valid before trying to transform it

  //TODO: alter bmp to make the image greyscale ...
  newPixels = bmp.pixelBuffer.map(pixel => ~pixel);
  bufferArr = [...bmp.headBuffer, ...bmp.colorBuffer, ...newPixels];
  buildNewImage(bmp, bufferArr);
};

const transformInversion = bmp => {
  newColor = bmp.colorBuffer.map(color => ~color);
  bufferArr = [...bmp.headBuffer, ...newColor, ...bmp.pixelBuffer];
  buildNewImage(bmp, bufferArr);
};

const transformHorizontally = bmp => {
  newPixels = bmp.pixelBuffer.reverse();
  bufferArr = [...bmp.headBuffer, ...bmp.colorBuffer, ...newPixels];
  buildNewImage(bmp, bufferArr);
};

const buildNewImage = async (bmp, bufferData) => {
  const bufferToWrite = Buffer.from(bufferData);
  await fsWriteFile(bmp.newFile, bufferToWrite);
};

const transforms = {
  greyscale: transformGreyscale,
  invert: transformInversion,
  flipH: transformHorizontally,
};

module.exports = transforms;