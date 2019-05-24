'use strict';

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

module.exports = transforms;