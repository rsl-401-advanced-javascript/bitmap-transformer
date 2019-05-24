'use strict';

const fs = require('fs');
const Bitmap = require('./lib/bitmap');

// ------------------ GET TO WORK ------------------- //

function transformWithCallbacks(file, operation) {

  fs.readFile(file, (err, buffer) => {

    if (err) {
      throw err;
    }

    bitmap.parse(buffer);

    bitmap.transform(operation);

    // Note that this has to be nested!
    // Also, it uses the bitmap's instance properties for the name and the new buffer
    fs.writeFile(bitmap.newFile, bitmap.buffer, (err, out) => {
      if (err) {
        throw err;
      }
      console.log(`Bitmap Transformed: ${bitmap.newFile}`);
    });

  });
}

// TODO: Explain how this works (in your README)
const [fileToTransform, operationToPerform] = process.argv.slice(2);

let bitmap = new Bitmap(fileToTransform);

transformWithCallbacks(bitmap.file, operationToPerform);

