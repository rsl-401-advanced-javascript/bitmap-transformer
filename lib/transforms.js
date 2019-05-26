'use strict';

const fs = require('fs');
const util = require('util');
const fsReadFile = util.promisify(fs.readFile);
const fsWriteFile = util.promisify(fs.writeFile);

const transformGreyscale = async bmp => {
  
  console.log('Transforming bitmap into greyscale');
  
  //TODO: Figure out a way to validate that the bmp instance is actually valid before trying to transform it

  //TODO: alter bmp to make the image greyscale ...
  const newColor = bmp.colorBuffer.map(color => ~color);
  const bufferArr = [...bmp.headBuffer, ...newColor, ...bmp.pixelBuffer];
  const bufferToWrite = Buffer.from(bufferArr);
  await fsWriteFile(bmp.newFile, bufferToWrite);
  
};

const transformInversion = (bmp) => {
  bmp = {};
};

const transforms = {
  greyscale: transformGreyscale,
  invert: transformInversion,
};

module.exports = transforms;