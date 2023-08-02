// data type in JS
// 1. boolean
// 2. string
// 3. number
// 4. Bigint
// 5. symbol
// 6. undefined

// use typeof to get the datatype

// "string" - "string" gives NaN
// true +  true gives 2 (true =1, false=0)

// difference betwwen null and undefined
// var some =null
// print(some)  this has null value
// var nothing
// print(nothing)  this is undefined

// bugs in js
// 1.  4 - "2" is 2 
// 2.  var some =null 
//     typeof(some) is object
 
// isNaN checks if the value is not a Number
 
// NaN === NaN gives false
// Number.NaN === NaN gives false
// isNaN(NaN) gives true
// isNaN(Number.NaN) gives true
// Number.isNaN(NaN) gives true

// Diff between double equal and tripple equal in js
// == does type coercion (conversion0)
// === does not do type coercion 

// Type coercion is the process ̇of converting a value from one data type to another. In JavaScript, type coercion happens implicitly when operators or functions are applied to values of different types

//operators

// var ass= "hi"
// console.log(ass) 
// console.log(3**3)  power / exponentiation

// var q=1
// var w=1
// console.log( "ths result is " + q===w)


// flasy = 0 ,undefined ,NaN, null, false**
// truthy = rest all values are truthy

// conditional 
// if else
// ternery operator  :   expression?true:fals

// switch (data){
//     case data : logic
// }

// while(condition)
// {
//     logic
// }

// do {

// }while(condition);

// for( var i = 0 ;i< 20; i++)
// {
//     var ss=2;
//     console.log(i*ss);
// }

// function name(){

// }

// what is funtion arguement and funtion parameter

// Anonymous funtion
// var exp = function(a,b){ return a+b}
// console.log(exp(2,3))

// js created in 1996
// In 2015 - ES6 is the most important update
// Features of  ES6
// 1. Let and const
// 2. Destructuring
// 3. Template strings 
// 4. Object properties
// 5. Default arguements 
// 6. Arrow function
// 7. REST operators
// 8. SPREAD operators


// var => function scope
// let and const => Block scope

// var l1 =3
// if (true)
// {
//     let l2 = 4   
// }
// console.log(l2)   cannot access outside scope with let

//template literals
// var ran =10
// console.log(`${ran}`)

// fat arrow funtion
// const func = (a,b) => `${a+b}`;

// Array 
// var arr = [2,32,4,3,5,65,6,6]
// for ( var i =0 ; i<arr.length ; i++)
// {
//     console.log(arr[i]);
// }

// 'for in loop' -> Gives the index
// for ( let ele in arr)
// {
//     console.log(ele);
// }

// 'for of loop' -> Gives the Data
// for (let ele of arr)
// {
//     console.log(ele);
// }

// Advanced for each method (traditional way)
// arr.forEach(function(ele,index, array){
//     console.log(ele + " : " + index + " : " + array);
//     }
// );


// Advanced for each method (fat arrow)
// arr.forEach((ele,index, array)=>{
//     console.log(ele + " : " + index + " : " + array);
//     }
// );

// indexOf() returns the first index of the element
// console.log(arr.indexOf(6));
// lastIndexOf() returns the last index of the element
// console.log(arr.lastIndexOf(6));
 
// includes() return boolean result if is element present or not
// console.log(arr.includes(62));

// arr.find(), arr.findIndex(), arr.filter(), arr.findLast(), arr.findLastIndex(), arr.fill() from MDN site

// array CRUD

// push -> insert at last
// unshift -> insert at the begining
// pop -> removes the last Element and returns
// shift -> removes the first Element and returns

// splice from MDN

// map from MDN
// difference betweem foreach and map is that the return value of map is and array of results whereas froeach returns undefined
// we can add chain of methods with the Map

// map with filter and reduce methods
// var ss= [2,3,4,5,6,7];
// let arr = ss.map((ele, index, map) => ele *2).filter((ele) => ele > 10).reduce((accumul,ele) => accumul += ele );

// with accumulatro prev stored value
// let arr = ss.map((ele, index, map) => ele *2).filter((ele) => ele > 10).reduce((accumul,ele) => accumul += ele , 8);
// console.log(arr);

// var loda ="       khvkjh kfb kk     lj jlkjkljkl     kllkjlkj lkj         jdncndksjnc          ";
// console.log(loda.trim());

