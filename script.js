"use strict";

//1)
//<button onclick="alert('Click')" id="btn"></button> //не використовується

//2)
const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay'),
      btns = document.querySelectorAll('button');

//btn.onclick = function() {
 //   alert('Click');
//}; // не використовується

//3)

btn.addEventListener('click', () => {
    alert('Click');
});

btn.addEventListener('click', () => {
    alert('Second click');
});

let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
    //e.target.remove();
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('mouseenter', deleteElement);
    // }
};

btn.addEventListener('mouseenter', deleteElement);
overlay.addEventListener('mouseenter', deleteElement);

// вспливання подій - подія відбуваєтья спершу на вложеному

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
});

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});