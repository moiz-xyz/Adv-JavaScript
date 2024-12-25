//  Default parameters 
function add(x, y=2){
   console.log( x + y );
   }
add ( 2 , 8 ) // output (10)

//  1 Set a default value for a discount rate in a function that calculates the final price.

let shirt = parseInt(1880);
let pant = parseInt(1380);
let coat = parseInt(4380);
let hoode = parseInt(2000)

let total_expense = pant + shirt + coat + hoode;
// console.log(total_expense);

function  discount( x, y = 0.50) {
   return (x * y)
}
// discount(4)
console.log (`Your Total bill is  ${discount(total_expense)}` ); 
 // output (Your Total bill is  4820)

// 2 Create a function to greet a user with a default name if no name is provided.

function  greet(y ="User") {
   console.log(`Hello ${y}`);
   
}
greet()  // output (Hello user)
greet("Moiz") // output (Helllo moiz)

//  3 Create a function to greet a user with input  and set a  default name and  if no name is provided.

function greetUser(){
   const name = prompt (" What is your name ") || "Guest"
   console.log(`Hello ${name}`);
   
}
greetUser()

// 4  Write a function to calculate the cost of a meal with a default tip percentage.

let item1 = Number("20");
let item2 = Number ("50");
let item3 = Number ("100");
let item4 = Number("582");
let total = item1 + item2 + item3 + item4;
function  totalBill( total , tax = 0.20){
   return total + total * tax
}
console.log(totalBill( total));
// output (902.4)

