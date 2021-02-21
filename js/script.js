"use strict";

const obj = {
    a: 5,
    b: 1
};

const copy1 = obj; // передача по посиланню

copy1.a = 10;

console.log(copy1);
console.log(obj);

function copy(mainObj) { //поверхнє копіювання об'єкта 
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10; //поверхнісні копії

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); //додавання об'єктів
console.log(Object.assign({}, add));

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); //копіювання масиву


//SPREAD OPERATOR - ОПЕРАТОР РОЗВОРОТУ
const video = [ 'youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};