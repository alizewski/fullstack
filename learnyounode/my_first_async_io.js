/* 
Write a program that uses a single asynchronous filesystem operation to  
  read a file and print the number of newlines it contains to the console  
  (stdout), similar to running cat file | wc -l.  
   
  The full path to the file to read will be provided as the first  
  command-line argument.
*/

//require in the file system core module
const fs = require('fs');

//define the error first callback function
let readFileCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    //process the data within the async callback
    console.log(data.split('\n').length-1);
  }
};

//pull in the command line file path
filePath = process.argv[2];
//read the file asynchronously
fileContents = fs.readFile(filePath, 'utf-8', readFileCallback);