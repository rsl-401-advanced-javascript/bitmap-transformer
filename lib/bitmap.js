'use strict';

module.exports = class Bitmap {
  constructor(filepath) {
    this.file = filepath;
  }

  parse(buffer) {
    this.buffer = buffer;
    this.type = buffer.toString('utf-8', 0, 2);
    //... and so on
  }

  transform(operation) {
    // This is really assumptive and unsafe
    transforms[operation](this);
    this.newFile = this.file.replace(/\.bmp/, `.${operation}.bmp`);
  }

  
};


const transformGreyscale = (bmp) => {
  
  console.log('Transforming bitmap into greyscale', bmp);
  
  //TODO: Figure out a way to validate that the bmp instance is actually valid before trying to transform it
  
  //TODO: alter bmp to make the image greyscale ...
  
};

const doTheInversion = (bmp) => {
  bmp = {};
};

const transforms = {
  greyscale: transformGreyscale,
  invert: doTheInversion,
};