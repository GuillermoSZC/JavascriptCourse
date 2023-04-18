/*
**********************
   Data types in js
**********************
*/

// String
let strName = "Carlos";
console.log(strName);
strName = 10;
console.log(typeof strName); // Return variable type (typeof)

// Int
const number = 1000;
console.log(number);

// Object
var obj = 
{
    strName : "Juan", // String
    strSubname : "Perez", // String
    phoneNumber : 67654676 // Integer
};
console.log(obj);

// Bool
var semaphore = true;

// Function
function myFunction()
{

}

// Symbol
var symbol = Symbol("example");

// Class
class ClassExample
{
    constructor(strName, strSubname)
    {
        this.strName = strName;
        this.strSubname = strSubname;
    }
}
console.log(typeof ClassExample);

// Undefined
var x;
console.log(x);

// Null
var y = null;
console.log(typeof y);

// Array
var cars = ["Seat", "BMW", "Audi"];
console.log(cars);

