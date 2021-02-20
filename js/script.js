"use strict";

function showFirstMessage(text) {
    console.log(text);
    let num = 20;
}

showFirstMessage('Hello world!');
console.log(num);

console.log(calc(4, 4));

function calc(a, b) {
    return (a+b);
}

const logger = function() {
    console.log('Hello');
};

logger();

const calcl = (a, b) => { return a + b };