//constant variables

//number, unlike c++ this can be both a float and an int
const myNum = 3;
//string
const myStr = "Hello world!";
//bool, must equal true or false
const myBool = true;


//intro to arrays and objects

//array
const myArray = [];
//object
const myObj = {};

///////////////On top of that, there are two special types called undefined and null/////////////

/*
//undefined : this will not run, you need to initialize variables
const newVariable; 
console.log(newVariable);
*/

//in contrast the correct way to non-initialize a variable is to use the 'null' value
const emptyVar = null;
console.log(emptyVar);

/////////////////////Exercise/////////////////////////////
/*You must define the following variables:

A number called myNumber which contains the number 4;
A string called myString which contains the sentence Variables are great.;
A boolean called myBoolean which contains the value false;*/

myNumber = 4;
myString = "Variables are great"
myBoolean = false;

console.log("myNumber is equal to " + myNumber);
console.log("myString is equal to " + myString);
console.log("myBoolean is equal to " + myBoolean);