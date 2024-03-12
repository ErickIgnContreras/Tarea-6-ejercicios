/* 
For each of the exercises below, assume you are starting with the following people array.
1let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
2Write a command that prints out all of the people in the list.
3Write the command to remove "Dani" from the array.
4Write the command to remove "Juan" from the array.
5Write the command to move "Luis" to the front of the array.
6Write the command to add your name to the end of the array.
7Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
8Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.

*/

//1
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

document.getElementById("initial-array").innerHTML = `${people}`;

function showArray (arr){
     document.getElementById("result-1").innerHTML = `Final Array: ${arr}`;
}
//2
console.log(people);

// 3
people.splice(people.indexOf("Dani"), 1);

// 4
people.splice(people.indexOf("Juan"), 1);

// 5
people.unshift(people.splice(people.indexOf("Luis"), 1)[0]);

// 6
people.push("Xamila");

// 7
for (let j = 0; j < people.length; j++) {
  console.log(people[j]);
  if (people[j] === "Maria") {
    break;
  }
}
showArray(people.join(", "));

//8
console.log(people.indexOf("Maria"));

console.log(people);