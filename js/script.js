"use strict";

let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

const soldier = {
    health: 400,
    armor: 100
};

const john = {
    health: 100
};

john.__proto__ = soldier; // не використовувати

console.log(john);

console.log(john.armor);

Object.setPrototypeOf(john, soldier); //правильне використання
const john1 = Object.create(soldier);