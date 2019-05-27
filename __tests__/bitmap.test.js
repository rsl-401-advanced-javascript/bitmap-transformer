'use strict';

const fs = require('fs');
const util = require('util');
const fsReadFile = util.promisify(fs.readFile);
const Bitmap = require('../lib/bitmap');

let bitmap = new Bitmap(`${__dirname}/../assets/baldy.bmp`);

describe('A created bitmap', () => {
  it('should have a file name', () => {  
    expect(bitmap.file).toBeDefined();
  });

  it('should be parsable', async () => {
    let buffer = await fsReadFile(bitmap.file);
    bitmap.parse(buffer);
    expect(bitmap.buffer).toBeDefined();
    expect(bitmap.type).toBe('BM');
    expect(bitmap.size).toBeDefined();
    expect(bitmap.offset).toBeDefined();
    expect(bitmap.width).toBeDefined();
    expect(bitmap.height).toBeDefined();
    expect(bitmap.bitsPerPixel).toBeDefined();
    expect(bitmap.headBuffer).toBeDefined();
    expect(bitmap.colorBuffer).toBeDefined();
    expect(bitmap.pixelBuffer).toBeDefined();
  });
});

describe('Transforming a bitmap', () => {
  it('should create a new file', () => {
    bitmap.transform('flipH');
    expect(bitmap.newFile).toBeDefined();
  });
});