/*
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]

*/

console.log();

const numbers = [10, 50, 100, 150];

const doubles = numbers.map( duplicate => duplicate*2);

function showResults(){
    document.getElementById("initial-array").innerHTML = `${numbers}`;
    document.getElementById("result").innerHTML = `${doubles}`;
}
showResults();