const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();
const nextPages = new Stack();
let currentPage = 'Home';
// ------------------------------
// Helper Functions
// ------------------------------
showCurrentPage = (action) => {
  console.log(`\n${action}`);
  console.log(`Current page = ${currentPage}`);
  console.log('Back page = ', backPages.peek());
  console.log('Next page = ', nextPages.peek());
}

newPage = (page) => {
  backPages.push(currentPage);
  currentPage = page;
  while (!nextPages.isEmpty()){
    nextPages.pop();
  }
  showCurrentPage("New: ");
}

backPage = () => {
  nextPages.push(currentPage);
  currentPage = backPages.pop();
  showCurrentPage("Back: ");
}

nextPage = () => {
  backPages.push(currentPage);
  currentPage = nextPages.pop();
  showCurrentPage("Next: ");
}

/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '

// ------------------------------
// User Interface Part 1
// ------------------------------
let finish = false;
let showBack = false;
let showNext = false;

showCurrentPage('Default: ');
while(!finish){
  let instructions = baseInfo;
  if(!backPages.isEmpty()){
    instructions = instructions + ',' + backInfo;
    showBack = true;
  } else{
    showBack = false;
  }
  if(!nextPages.isEmpty()){
    instructions = instructions + ',' + nextInfo;
    showNext = true;
  } else{
    showNext = false;
  }
  instructions = `${instructions}, ${quitInfo}.`;
  console.log(instructions);
  // ------------------------------
  // User Interface Part 2
  // ------------------------------
let answer = prompt(question);
let lowerCaseAnswer = answer.toLowerCase()
if ((lowerCaseAnswer !== 'n') && (lowerCaseAnswer !== 'b') && (lowerCaseAnswer !== 'q')) {
    // we create a new page based on the url
    newPage(answer);
}
else if((showBack) && (lowerCaseAnswer === 'b')){
  backPage();
}
else if((showNext) && (lowerCaseAnswer === 'n')){
  nextPage();
}
else if (lowerCaseAnswer === 'b') {
    // invalid input to a non-available option
    console.log('Cannot go back a page. Stack is empty.');
  } else if (lowerCaseAnswer === 'n') {
    // invalid input to a non-available option
    console.log('Cannot go to the next page. Stack is empty.');
  }
  else if (lowerCaseAnswer === 'q') {
    // we quit the program
    finish = true;
  } 
}