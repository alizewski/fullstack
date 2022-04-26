/*
You will be provided with three URLs as the first three command-line arguments.  
  You must collect the complete content from each of the URLs using http.get()  
  and print it to the console (stdout). You don't need to print out the  
  length, just the data as a String; one line per URL. The catch is that you  
  must print them out in the same order as the URLs are provided to you as  
  command-line arguments. 
*/

const http = require('http');

let urlInput1 = process.argv[2];
let urlInput2 = process.argv[3];
let urlInput3 = process.argv[4];

let dataCollect = [0, 0, 0];
callCount = 0;

function streamCallback (response) {
    response.setEncoding('utf8');
    let data = "";
    callCount += 1;
    //console.log(callCount);
    response.on('data', (chunk) => {
      data+=chunk;
      //console.log(callCount+ ' + '+ data)
    });
    response.on('error', (err) => {
      console.log(err);
    });
    response.on('end', () => {
      dataCollect[callCount-1] = data;
      //console.log('data end '+callCount);
      //console.log(dataCollect);
      if(callCount === 3){
        //console.log('callCount is 3!');
        console.log(dataCollect[0]);
        console.log(dataCollect[1]);
        console.log(dataCollect[2]);
      }
    });
};

http.get(urlInput1, streamCallback);
http.get(urlInput2, streamCallback);
http.get(urlInput3, streamCallback);

/*Don't expect these three servers to play nicely! They are not going to  
  give you complete responses in the order you hope, so you can't naively  
  just print the output as you get it because they will be out of order.  
   
  You will need to queue the results and keep track of how many of the URLs  
  have returned their entire contents. Only once you have them all, you can  
  print the data to the console.*/


/*OFFICIAL SOLUTION
'use strict'
    const http = require('http')
    const bl = require('bl')
    const results = []
    let count = 0
    
    function printResults () {
      for (let i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }
    
          results[index] = data.toString()
          count++
    
          if (count === 3) {
            printResults()
          }
        }))
      })
    }
    
    for (let i = 0; i < 3; i++) {
      httpGet(i)
    }

*/