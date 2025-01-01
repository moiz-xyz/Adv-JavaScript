// 1. Array Merging
// Use the spread operator to create a single array that contains all the elements of both arrays, in the same order.
const fruits = ["apple", "banana", "cherry"];
const vegetables = ["carrot", "broccoli"];
const merge = [...fruits ,...vegetables]
console.log(merge);
// output ("apple" "banana" "cherry" "carrot"  "broccoli")

// 2. Copy an Array
// Create a new array using the spread operator that is a copy of the original array, and then add a new number at the end.
const numbers = [1, 2, 3, 4];
console.log([...numbers]);
// output (1, 2, 3, 4)

// 3. Find the Maximum
// Use the spread operator to find the maximum number in the array.
const scores = [87, 45, 98, 12, 67];
const max = Math.max(...scores)
console.log(max);
// output (98)



// 4. Combine Properties of Two Objects
// Use the spread operator to create a new object that combines all the properties of both objects.
const user = { name: "Alice", age: 25 };
const address = { city: "New York", country: "USA" };
const mergeobject = {...user,...address}
console.log(mergeobject);


// 5. Remove an Element from an Array
// Use the spread operator to create a new array that excludes the "pencil".

const items = [ "pen", "pencil", "eraser", "sharpener"];
const neaarry = [...items.filter ( item => item !== "pencil" ) ]
console.log(neaarry);


// 6. Function Arguments
// Write a function that takes a variable number of arguments and calculates their sum.
//  Use the spread operator to pass an array of numbers to this function.

function sum (...numbers){
 return numbers.reduce (( a,b) => a+b)
}

console.log( sum (3,2) );
//  output (5)

// 7. Update an Object
// Use the spread operator to create a new object with the same properties 
// but with an updated price of 1200.


const product = { id: 1, name: "Laptop", price: 1000 };
const newobj = {...product,price :1200}
console.log(newobj);
// console.log(product);

// 8. Flatten a Nested Array

// Use the spread operator to create a single flattened array.

const nested = [1, [2, 3], [4, 5]];
let single = [] .concat(...nested)
console.log(single);

// 9. Merge Multiple Objects
// Use the spread operator to merge all three objects into one.


const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };
const obj4 = { ... obj1,... obj2 ,...obj3 }
console.log(obj4);



