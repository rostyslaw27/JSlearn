'use strict';

// FILTER
const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames);

// MAP
let answers = ['IvAn', 'AnnA', 'Hello'];

answers = answers.map(item => item.toLowerCase());

console.log(answers);

// EVERY/SOME
const some = [4, 'qwq', 'strefg'];

console.log(some.some(item => typeof(item) === 'number'));
console.log(some.every(item => typeof(item) === 'number'));

// REDUCE

const arr = [4, 5, 1, 3, 2, 6];

const res = arr.reduce((sum, current) => sum + current, 3); // 3 - початкове значення
console.log(res);

const arrStr = ['apple', 'pear', 'plum'];

const resStr = arrStr.reduce((sum, current) => `${sum}, ${current}`);
console.log(resStr);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);