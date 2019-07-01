var faker = require("faker"); 

console.log("=====================");
console.log("WELCOME TO MY SHOP!");
console.log("=====================");

for(var i = 0; i < 10; i++){
  console.log(faker.commerce.productName() + " - $" + faker.commerce.price()); 
}

//var faker calls in the faker package
//The three console.logs set the look of the banner for greeting
//for loop prints out 10 different products
//***console.log in the for loop prints the product name and adds the hyphen and dollar sign and then the price; 
//in observing the docs post exercise, rememeber the order of the dots comes from the top to be first and then the next second****
