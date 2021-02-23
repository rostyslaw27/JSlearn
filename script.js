'use strict';

const now = new Date(); 

console.log(now);
// місяць рахується з нуля, від години віднімається часовий пояс
// відлік йде з 1970 року
// 0 - неділя

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getUTCHours());

console.log(now.getTimezoneOffset());
console.log(now.getTime());

console.log(now.setHours(18));

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3; //піднесення до степеня
}

let end = new Date();

alert(`${end - start}`);