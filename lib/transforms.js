'use strict';

const fs = require('fs');
const util = require('util');
const fsWriteFile = util.promisify(fs.writeFile);
let newColor;

const transformGreyscale = async bmp => {
  
  console.log('Transforming bitmap into greyscale');
  
  //TODO: Figure out a way to validate that the bmp instance is actually valid before trying to transform it

  //TODO: alter bmp to make the image greyscale ...
  let newPixels = bmp.pixelBuffer.map(pixel => ~pixel);
  const bufferArr = [...bmp.headBuffer, ...bmp.colorBuffer, ...newPixels];
  const bufferToWrite = Buffer.from(bufferArr);
  await fsWriteFile(bmp.newFile, bufferToWrite);
};

const transformInversion = bmp => {
  newColor = bmp.colorBuffer.map(color => ~color);
  buildNewImage(bmp, newColor);
};

const buildNewImage = async (bmp, colors) => {
  const bufferArr = [...bmp.headBuffer, ...colors, ...bmp.pixelBuffer];
  const bufferToWrite = Buffer.from(bufferArr);
  await fsWriteFile(bmp.newFile, bufferToWrite);
};

const transforms = {
  greyscale: transformGreyscale,
  invert: transformInversion,
};

module.exports = transforms;