'use strict';

/* new RegExp('pattern', 'flags');
/pattern/f */

const ans = prompt('Введите ваше имя');

const reg = /n/;
console.log(reg.test(ans));

//i - без залежності від регістра
//g - декілька входжень
//m -багато стрічок

// \d - числа
// \w - слова
// \s - space

console.log(ans.search(reg));
console.log(ans.match(reg));

const pass = prompt('Password');

console.log(pass.replace(/./g,'*')); //. - all elements \. - .
console.log('12-34-56'.replace(/-/g, ':'));

const str = 'My name is R2D2';
console.log(str.match(/\w\d\w\d/i));

// \D - не числа
// \W - не слова