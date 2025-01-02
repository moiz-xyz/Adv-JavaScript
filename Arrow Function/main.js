

// 1. Chaining Arrow Functions**
// Write an arrow function that takes a number and returns another arrow function. 
// The second function should take a number and return the sum of both numbers.
let additon = (a) =>{
return (b) => {
     return  a + b
}
}
let a  = ( additon(22222332));
console.log( a (8624124) );
//  Output: 30846456



// Sort an Array of Strings**
// Write an arrow function that takes an array of strings and
// returns a new array sorted by the length of each string in ascending order.

let arr1 = ["apple", "cat", "banana", "dog"];
let sort = (arr1) => arr1.sort ( (first, second) => second.length - first.length);
console.log(( sort(arr1)));
 // Output: ["cat", "dog", "apple", "banana"]

// 3. Array of Squares**
// Create an arrow function that takes an array of numbers and returns an 
// array where each number is squared, but only if the number is even.

// const squareEven = [1, 2, 3, 4];
const squared =  (arr3) => {
     return arr3
           .filter( num => num % 2 === 0 )
           .map ( num  => num **2)
}
console.log(squared ( [ 1,2,3,4 ] ) ) ;

// Output: [4, 16]`




// 5. Calculate Factoria
// Write an arrow function that takes a number and returns its factorial using recursion.

let factorial = (n) => {
     let start = 1 ;
     for ( let i = 1 ; i <=n ; i++  ){
          start *= i
     }
     return start
}

console.log( factorial (5) );

// **Example:**  
// `factorial(5) // Output: 120`

// ---

// ### **6. Filter Objects by Property**
// Write an arrow function that takes an array of objects and a property value. Return a new array containing only the objects that have the given property value.

// **Example:**  
// `filterByProperty([{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }], 25)`  
// **Output:**  
// `[{ name: 'Alice', age: 25 }]`

// ---

// ### **7. Count Words in a Sentence**
// Write an arrow function that takes a string and returns an object where the keys are the words in the string and the values are the number of times each word appears.

// **Example:**  
// `wordCount("hello world hello") // Output: { hello: 2, world: 1 }`

// ---

// ### **8. Flatten and Filter**
// Write an arrow function that takes a nested array and flattens it into a single-level array, while filtering out any numbers greater than a given value.

// **Example:**  
// `flattenAndFilter([1, [2, [3, 4]], 5], 3) // Output: [1, 2, 3]`

// ---

// ### **9. Check for Anagrams**
// Write an arrow function that takes two strings and returns `true` if they are anagrams of each other, and `false` otherwise.

// **Example:**  
// `isAnagram("listen", "silent") // Output: true`

// ---

// ### **10. Find the Longest Word**
// Write an arrow function that takes a sentence and returns the longest word in it.

// **Example:**  
// `longestWord("The quick brown fox jumps over the lazy dog")`  
// **Output:** `"jumps"`

// ---

// These problems are designed to test your understanding of **arrow functions, closures, recursion, higher-order functions, and array methods**. They will help you think critically about how to structure and optimize your code. Let me know if you need help with any of them!