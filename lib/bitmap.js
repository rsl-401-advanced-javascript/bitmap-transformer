'use strict';

const transforms = require('./transforms');

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
