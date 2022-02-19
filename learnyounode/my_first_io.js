/* 
Write a program that uses a single synchronous filesystem operation to  
read a file and print the number of newlines (\n) it contains to the  
console (stdout), similar to running cat file | wc -l.

The full path to the file to read will be provided as the first command-line argument.
*/

//require in the file system core module
const fs = require('fs');

filePath = process.argv[2];
fileBuffer = fs.readFileSync(filePath);
fileContents = fileBuffer.toString();
console.log(fileContents.split('\n').length-1);