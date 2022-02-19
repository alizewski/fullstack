//require in the file system core module
const fs = require('fs');
const path = require('path');

module.exports = function (filePath, fileExt, fileExtCallback) {
    fileExt = '.' + fileExt;
    //check for errors & do early return within the callback function

    let fileFilterCallback = (err, data) => {
        if (err) {
            return fileExtCallback(err);
        } else {
            //filter the data (list of filenames) by the extension provided
            let printArray = [];
            data.forEach(file => {
                if(path.extname(file) === fileExt){
                    printArray.push(file);
                }
            })
          fileExtCallback(null, printArray);
        }
    };

    //read the file asynchronously
    fileContents = fs.readdir(filePath, 'utf-8', fileFilterCallback);
    return fileExt;
}