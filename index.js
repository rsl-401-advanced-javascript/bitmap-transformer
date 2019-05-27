'use strict';

const fs = require('fs');
const util = require('util');

const Bitmap = require('./lib/bitmap');
const fsReadFile = util.promisify(fs.readFile);
const fsWriteFile = util.promisify(fs.writeFile);

// ------------------ GET TO WORK ------------------- //

async function transformBitMap(file, operation) {

  let buffer = await fsReadFile(file);

  bitmap.parse(buffer);

  bitmap.transform(operation);

  // Note that this has to be nested!
  // Also, it uses the bitmap's instance properties for the name and the new buffer
  await fsWriteFile(bitmap.newFile, bitmap.buffer);

  console.log(`Bitmap Transformed: ${bitmap.newFile}`);
}

// TODO: Explain how this works (in your README)
const [fileToTransform, operationToPerform] = process.argv.slice(2);

let bitmap = new Bitmap(`${__dirname}/assets/${fileToTransform}`);

transformBitMap(bitmap.file, operationToPerform);

