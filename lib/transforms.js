'use strict';

const fs = require('fs');
const util = require('util');
const fsWriteFile = util.promisify(fs.writeFile);
let newColor;
let newPixels;
let bufferArr;

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
  invert: transformInversion,
  flipH: transformHorizontally,
};

module.exports = transforms;