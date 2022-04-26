/*
Write a program that performs an HTTP GET request to a URL provided to you  
  as the first command-line argument. Write the String contents of each  
  "data" event from the response to a new line on the console (stdout).
*/

const http = require('http');

let urlInput = process.argv[2];

function streamCallback (response) {
    response.setEncoding('utf8');
    let data = "";
    response.on('data', (chunk) => {
        console.log(chunk);
    });
    response.on('error', (err) => {
        console.log(err);
    });
    response.on('end', () => {
        return;
    });
};

const stream = http.get(urlInput, streamCallback);

/* OFFICIAL SOLUTION
const http = require('http')
    
    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    }).on('error', console.error)
*/