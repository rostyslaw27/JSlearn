'use strict';

function* generator() {
    yield 'S';
    yield 'C';
    yield 'r';
    yield 'p';
    yield 't';
}

const str = generator();

console.log(str.next());
console.log(str.next().value);
console.log(str.next());

function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

for (let k of count(7)) {
    console.log(k);
}