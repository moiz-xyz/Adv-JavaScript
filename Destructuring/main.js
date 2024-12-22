//  Array destucturing array 
 let arr = ["Mango", "Banana", "Garapes" , "apple"];

//  Exercise

// 1 Extract the first two fruits into separate variables.
let [Mango , Banana ] = ["Mango","Banana"];
console.log(Mango , Banana);
// 2 Extract the last three fruits into a new array using the rest operator.
let [first , ...lastThrre] = ["Mango", "Banana", "Garapes" , "apple"];
console.log(lastThrre);

// 3 Skip the second fruit and extract the first and third fruits.
let [ first_, second_ ,third_ ] = ["Mango", "Banana", "Garapes" , "apple"];
console.log(first_ ,third_);


//  Object Destruction
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
      city: "New York",
      country: "USA",
    },
  };
//   1 Extract firstName, lastName, and age into separate variables.
const {firstName ,lastName ,age} = person
console.log(firstName ,lastName ,age);

// 2 Extract city from the address object.
const {city} = person.address
console.log(city);

//  3 Rename firstName to name and country to nation
const {firstName: name  , address :{country :nation} } = person
console.log(name);
console.log(nation);

//  function parameter destruxtion 
// 1 Destructure the id and name properties inside the function parameter.
// 2 Print the extracted values.
const employee = {
    id: 101,
    name: "Sarah",
    designation: "Software Engineer",
  };
function printemploy ( {id , name}){
    console.log(`ID ${id}, name ${name}`);
    
}
const manger = {
    id: 202,
    name : "Moiz",
    designation: "Ceo"
}
printemploy(employee)
printemploy(manger)



