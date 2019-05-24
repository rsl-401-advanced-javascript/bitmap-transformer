'use strict';

const transforms = require('./transforms');

module.exports = class Bitmap {
  constructor(filepath) {
    this.file = filepath;
  }

  parse(buffer) {
    this.buffer = buffer;
    this.type = buffer.toString('utf-8', 0, 2);

    this.size = buffer.readInt32LE(2);
    this.offset = buffer.readInt32LE(10); // 0x0A

    this.width = buffer.readInt32LE(18); // 0x12
    this.height = buffer.readInt32LE(22); // 0x16
    this.bitsPerPixel = buffer.readInt16LE(0x1C); // probably 8, 16 or 32

    this.colorBuffer = buffer.slice(54, this.offset);
    this.pixelBuffer = buffer.slice(this.offset);
  }

  transform(operation) {
    // This is really assumptive and unsafe
    transforms[operation](this);
    this.newFile = this.file.replace(/\.bmp/, `.${operation}.bmp`);
  }

  
};
