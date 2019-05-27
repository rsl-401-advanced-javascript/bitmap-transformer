## Bitmap Transformer

## How to use
- In your command line type `node . <FILE NAME> <TRANSFORM OPERATION>`

- Possible transforms include:
  - flipH
  - invert

- Current files include:
  - 24bit.bmp
  - baldy.bmp
  - finger-print.bmp
  - house.bmp
  - newpicpls.bmp
  - non-palette-bitmap.bmp
  - palette-bitmap.bmp

## TODOs
const [fileToTransform, operationToPerform] = process.argv.slice(2);

This works by pulling the values from provess.argv.slice(2) out in order and assigning them to the variable names in order.