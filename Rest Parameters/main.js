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

smallestNo(2,9,10,20,1);

// Problem 2:
// Write a function that takes any number of arguments and returns the product of all the numbers.
function multiply(...multiply){
    return multiply.reduce( (a,b) => a * b ,1)
    
}
console.log(multiply(6,2));


// Problem 3: Concatenate Strings
// Write a function that accepts any number of string arguments and concatenates them into one single string.

function concatenateString (...string){
return string.join(" ")
}
console.log(concatenateString("Hi","How","are","you","?"));

// 
// Input: concatStrings("Hi","How","are","you","?")
// Output: "Hi How are you ?"

// Problem 4: Count Arguments
// Write a function that counts how many arguments are passed to it.
function count_length(...count){
return count.length
}
console.log(count_length(1,2,3,4,4,5,5,54,54));
// let arr = [1,2,3,4]
// console.log(arr.length);

// Output: 9



// Problem 5: Filter Numbers
// Write a function that takes a mix of numbers and other data types and returns an array containing only the numbers.


function filterNumbers(...filterNo){
    return  filterNo.filter( item => typeof item ==="number" )
}
console.log(filterNumbers(1, "a", true, 42, "hello", 7));
// Output: [1, 42, 7]

//  for string 
function filterstring(...filterstring){
    return filterstring.filter( word => typeof word ==="string")
}

console.log(filterstring(1, "a", true, 42, "hello", 7));

// output [ "a", "hello"]


