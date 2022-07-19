//////// in javascript, an array also functions as a list, a stack or a queue //////////

//2 different ways of defining an array
//bracket notation
var myArr = [1, 2, 3];
//array object notation
var sameArr = new Array(1, 2, 3);


//////// in javascript, arrays are sparse ////////////////////////////////////////////
///////// this means that even though we have not defined the entire array ///////////
///////// we can still add data to a specific location anywhere within the array /////
//eg..
var arr = [];
arr[3] = "location 4";
console.log(arr);   //prints out '[ <3 empty items>, 'location 4' ]'



////// javascript can actually hold different data types due to arrays ///////////////
////// simply being special types of objects /////////////////////////////////////////
//eg.
var anotherArray = ["string", 10, {}];
console.log(anotherArray);
anotherArray[22] = "I'm so far ahead!!";
console.log(anotherArray);

//////////////////////////////////// Exercise//////////////////////////////////////////
/*
You must define an array with the following three variables:

A string which has the value of "What is the meaning of life?"
A number which has a value of 42
A boolean which has a value of true
*/

var myArray = ["What is the meaning of life??", 42, true];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
var heckYea = ["gotta", "love", "the", "hitchiker's", "guide", "to", "the", "galaxy", "reference"];
console.log("\n" + heckYea);
