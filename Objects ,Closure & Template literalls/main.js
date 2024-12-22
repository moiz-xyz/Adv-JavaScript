
// Objects 
let data = [
    {
     image:"https://images.samsung.com/is/image/samsung/p6pim/pk/sm-a235flbkpkd/gallery/pk-galaxy-a23-sm-a235-sm-a235flbkpkd-532683705?$650_519_PNG$",
     price : " RS 150000",
     details :  "Samsung 6.6 inch Display, Quad camera system, Battery",
     location : "Mall road karachi" 
    },
    {
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKvjKchto9jmCcemmu2JvQpdn_JVo4Y7qLw&s",
        price : " RS 320000",
        details: "Toyota / Corolla / 1.4 D-4D / Elegant / 2007 TOYATA CORALA 1.4 4D ELEGAN",
      location : "Bhraia town karachi",

    },
    {
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfe_67x6pJ9ZRF79nH71Ad-a3CS4nlLP8LAQ&s",
    price : " RS 415000",
    details  : "The Yamaha 360 YBR125G perfect blend of comfort and , ideal for adventurous rides.",
    location :" Multan city"
    } ,
    {
     image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVvAxJVav6IPnrh8iE9PR2LNa0s-v_mSzo9g&s",
     price :" RS 97000000",
     details:"Brand New CORNER House A Class Material Designer House Sale Best Location",
     location : "Islamabad main city"
    }
];
function createcard (data){
let first_div = document.createElement("div");
first_div.classList.add("cards1");

let image = document.createElement("img");
 image.src = data.image;

 let second_div = document.createElement("div");
 second_div.classList.add("cards2");

 let price = document.createElement("p");
 price.textContent = data.price;
 price.classList.add("p1");


 let details = document.createElement("p");
 details.textContent = data.details;

 let location  = document.createElement("p");
 location.textContent = data.location;
 location.classList.add("p2")

 second_div.appendChild(price);
 second_div.appendChild(details);
 second_div.appendChild(location);

 first_div.appendChild(image);
 first_div.appendChild(second_div);

 return first_div;
}
let get = document.getElementById("cards");
for( let i = 0 ; i < data.length ; i ++){
let cards = createcard (data[i]) ;
get.appendChild(cards);
    }



//  Closures

// 1 Counter
function counter () {
    let start = 0;
    function increment () {
        start += 1
        return start
    }
    return increment
};
const count = counter();
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());


// 2 Private Variable  which takes the secret and then if you want to update i will updat that too....
let input = prompt("Do you want to tell your secret");
let btn = document.createElement("button");
btn.textContent = "Get your secret";
document.body.appendChild(btn);
let btn2 = document.createElement("button");
btn2.textContent = "Update the secret";
document.body.appendChild(btn2);
function secret(){
    btn.onclick = function (){
    console.log(input);
    };
    btn2.onclick = function (){
    let input2 = prompt("Update the secret");
   input = input2;
    console.log(input2);
     }
}
 secret();


//  Template literals 
let my_name = "Moiz";
console.log(`Abdul ${my_name}`);

//  Receipt maker

let name = "Ali";
let itemsdata = {
item1 : "Apple",
item1_price : "$6",
item2 : "Milk",
item2_price : "$4",
item3 : "Bread",
item3_price : "$2"
};
let item1_price = parseInt(itemsdata.item1_price.slice(1)); 
let item2_price = parseInt(itemsdata.item2_price.slice(1));
let item3_price = parseInt(itemsdata.item3_price.slice(1));

let total_bil = parseInt(item1_price + item2_price + item3_price );
console.log(`$${total_bil}`);




