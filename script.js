'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

const width = box.clientWidth;
const height = box.clientHeight;

const width1 = box.offsetWidth;
const height1 = box.offsetHeight;

const width2 = box.scrollWidth;
const height2 = box.scrollHeight;

console.log(width, height);

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box);

console.log(style);

console.log(document.documentElement.clientWidth);

window.scrollBy(0, 400);
window.scrollTo(0, 400);