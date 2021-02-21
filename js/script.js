"use strict";

const arr = [1, 2, 3, 6, 8];

arr.pop();
arr.push(10);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} in array ${arr}`);
});

const str = prompt('', '');
const products = str.split(', ');
products.sort();
console.log(products.join('; '));

const arr2 = [2, 13, 26, 8, 10];

arr2.sort(compareNum);

function compareNum(a, b) {
    return a-b;
}