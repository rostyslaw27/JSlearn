'use strict';
let k = 0;

function count() {
    for (let i = 0; i < 1e9; i++) {
        k++;
    }
    alert(k);
}

count(); // робити декомпозицію

// ЗАПИТАННЯ НА СПІВБЕСІДІ

setTimeout(() => {
    console.log(1);
}, 0); // 0 == 4мс

console.log(2);

// 2
// 1