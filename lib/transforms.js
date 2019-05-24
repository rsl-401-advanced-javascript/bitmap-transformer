'use strict';

const fs = require('fs');
const util = require('util');
const fsReadFile = util.promisify(fs.readFile);

const transformGreyscale = async bmp => {
  
  console.log('Transforming bitmap into greyscale');
  
  //TODO: Figure out a way to validate that the bmp instance is actually valid before trying to transform it
  let buffer = await fsReadFile(bmp.file);
  
  //TODO: alter bmp to make the image greyscale ...
  
};

const transformInversion = (bmp) => {
  bmp = {};
};

const transforms = {
  greyscale: transformGreyscale,
  invert: transformInversion,
};

module.exports = transforms;