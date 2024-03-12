/*
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.

*/

console.log();


const arr = [2,4,6,8,10];
const sum = arr.reduce( (accumulator, currentValue) => accumulator + currentValue );
const product = arr.reduce( (accumulator, currentValue) => accumulator * currentValue );

document.getElementById("initial-array").innerHTML= `Nuestros datos son : ${arr}`;
document.getElementById("sum-result").innerHTML= `Resultado de la suma : ${sum}`;
document.getElementById("product-result").innerHTML= `Y si se multiplica es: ${product}`;
 
console.log();