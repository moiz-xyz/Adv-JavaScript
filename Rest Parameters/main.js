// console.log("hello");


function sum (a,...number){
console.log(a);
console.log(number);


}
sum (1,2,3,4,6,7,9,3);
// Problem 1: Find the Smallest Number
// Write a function that takes any number of numeric arguments and returns the smallest number.

function smallestNo(...number){
    console.log ( Math.min(...number))
}

smallestNo(2,9,10,10);


// Write a function that takes any number of arguments and returns the product of all the numbers.
function multiply(...multiply){
    return multiply.reduce( (a,b) => a * b ,1)
    
}
console.log(multiply(4,2));

