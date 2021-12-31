// Learn Javascript // this is an single line comment

/* and this is an double line comment

         Introduction to Javascript */

// 1. Datatypes
console.log(typeof 'Abc') // String
console.log(typeof  12) // int
console.log(typeof true) // boolean
console.log(typeof null) // object
console.log(typeof undefined) // undefined

// 2.primitive data type
let one = 'Javascript'
x = one[0]
console.log(x) // output = J

let two = 'Javascript'
y = two[1]
console.log(y) // output = a

// compare two values
// example 1
let var1 = 1
let var2 = 1

console.log(var1 == var2) // output = true

//example 2
let str1 = 'Javascript'
let str2 = 'Python'

console.log(str1 == str2) // output = false

//example 3
let bool1 = true
let bool2 = false

console.log(bool1 == bool2) //output = false


// 3.non-primitive data type
// so here in this example we can change the first postion to another value
let num1 = [5,20,30]
num1[0] = 10
console.log(num1) // ouput = [10,20,30]

///_______________________________________________________
/// IMPORTANT = we cannot compare non primitive data types/
///    we can do it but in another way as mentiioned below
///______________________________________________________/

//example-1
let number1 = [10,20,30]
let number2 = number1
console.log(number2) //output = [10,20,30]
//example-2
let compare1 = {
    name:'vicky',
    role:'coding',
    fav:'pyhton'
}
let compare2 = compare1
<<<<<<< HEAD
console.log(compare1 == compare2)  // true

//example-3
let compare3 = {
    name:'vicky',
    course:'cs50',
    phone:'2255'
}
let compare4 = {
    name:'VICKY',
    course:'CS50',
    phone:'2255'
} // false
console.log(compare3==compare4)


// Exercise ...
const w1 = "dog";
const w2 = "hai";

const join = w1 + " " + w2;
console.log(join)

//                       variables in javascript

     // using let keyword we can declare variables with different types of data types.
let num = '30'
let cha = 'hello'
let bool = true
console.log(num +" "+ cha+" "+bool)
    // using const keyword we can declare variables with numeric values
const PI = 3.14
const number =10
console.log(PI,number)
