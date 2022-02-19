//require in the local module
const mymodule = require('./mymodule.js');

//require in the core module
const path = require('path');

//pull in the command line variable representing file path
filePath = process.argv[2];

//pull in the command line variable representing file extension to filter by
fileExt = process.argv[3];

//define the error first callback function
let fileExtCallback = (err, data) => {
    if (err) {
      console.log(`Something went wrong: ${err}`);
    } else {
        data.forEach(file => console.log(file))
    }
};

mymodule(filePath, fileExt, fileExtCallback);