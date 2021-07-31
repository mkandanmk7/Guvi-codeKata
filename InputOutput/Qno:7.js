//Write a code to get the input in the given format and print the output in the given format

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
let getInput=userInput[0];
  let empty=[];
  for(let i=0;i<getInput.length;i++)
  {
      empty.push(getInput[i]);
  }
  console.log(empty.join(" "));
  

  //end-here
});
