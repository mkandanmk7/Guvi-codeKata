// Write a code to get the input in the given format and print the output in the given format

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
let getFirstLine=userInput[0];
let getSecondLine=userInput[1];
let getThirdLine=userInput[2];
console.log(getFirstLine);
console.log(getSecondLine);
console.log(getThirdLine);

});
