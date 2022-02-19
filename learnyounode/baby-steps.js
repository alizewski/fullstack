//Write a program that accepts one or more numbers as command-line arguments 
//and prints the sum of those numbers to the console (stdout)
//ex: node baby-steps.js 3 4 5 => prints 12
let sum = 0;
for (let i = 2; i < process.argv.length; i++){
    sum += parseInt(process.argv[i]);
}
console.log(sum);