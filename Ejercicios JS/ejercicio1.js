/*
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
}


printOutString();
Complete the function to print out the string: This is a sentence.

*/

console.log();

let arr = ["This", "is", "a", "sentence."];
function printOutString() {
 let phrase = arr.join(" ");
  return phrase;
}


function showArray(){

    document.getElementById("array-inicial").innerHTML = `${arr}`;
    document.getElementById("resultado").innerHTML = `${printOutString()}`;

}
showArray();

console.log( showArray());