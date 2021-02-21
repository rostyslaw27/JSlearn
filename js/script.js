"use strict";

let x = 5; alert(x++); //x=5

console.log([] + false - null + true); //Nan 

console.log([] + 1 + 2); //"12"

alert('1'[0]); //1

console.log(2 && 1 && null && 0 && undefined); // NULL   і зупиняється на false, або на true

console.log(!!( 1 && 2 ) === ( 1 && 2)); // false (!! - to bool)

alert( null || 2&&3 || 4); //3

alert(+'Infinity'); //Infinity