//Print the characters in a string separated by comma.

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
let guvi=userInput[0];
let b=[];
for(let i=0;i<guvi.length;i++)
{
    b.push(guvi[i]);
}
console.log(b.join(","));

  //end-here
});
