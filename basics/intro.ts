// so in this file we are going to learn about types in typescript

// how you declare a variable in typescript

let naam : string = "raj ranjan srivastav";
console.log(naam);
 
let uppercase = naam.toUpperCase();
console.log(uppercase);


let name = "raj ranjan srivastav";  // this is a good way to write it without collon : beacause tyescript is smarter enough it automaticaly detech what is inside......so you don't worry about it

typeof(name)

// name=4;  //we cant do this in typescript

export default name;

//please note down tsc is the compiler of typescript which is used to compile it .... and at the end what execute at browser is pure javascript......


// in typescript we get errors if we write something wrong syntax but in javascript..... there is nothing ... and it might be run 



// if we declare a variable in typescript without any types the it automatically take it as any types

let car;

car = "alto";
car = 3;
console.log(car);


// and use any if we didn't want to type  checking  so use any......
let bike : any;
bike=3;
bike="honda"

console.log(bike);
