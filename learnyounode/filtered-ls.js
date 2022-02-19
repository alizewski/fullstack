/*
Create a program that prints a list of files in a given directory,  
  filtered by the extension of the files. You will be provided a directory  
  name as the first argument to your program (e.g. '/path/to/dir/') and a  
  file extension to filter by as the second argument.  
   
  For example, if you get 'txt' as the second argument then you will need to  
  filter the list to only files that end with .txt. Note that the second  
  argument will not come prefixed with a '.'.
   
  The list of files should be printed to the console, one file per line. You  
  must use asynchronous I/O. 
*/

//require in the file system core module
const fs = require('fs');
const path = require('path');

//define the error first callback function
let readFileCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    //filter the data (list of filenames) by the extension provided
    data.forEach(file => {
        if(path.extname(file) === fileExt){
            console.log(file);
        }
    });
  }
};

//pull in the command line variable representing file path
filePath = process.argv[2];

//pull in the command line variable representing file extension to filter by
fileExt = '.' + process.argv[3];

//read the file asynchronously
fileContents = fs.readdir(filePath, 'utf-8', readFileCallback);