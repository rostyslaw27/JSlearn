"use strict";

function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
showThis(4, 5);


const obj ={
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
    }
};
obj.sum();


function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}


function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}
const user = {
    name: 'John'
};
sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);


function count(num) {
    return this*num;
}
const double = count.bind(2);
console.log(double(3));

//1) this = window, use strict = undefined
//2) Контекст у методів об'єкта буде сам об'єкт
//3) this в конструкторах і класах - новий екземпляр об'єкта
//4) Ручна прив'язка this: call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this); // контекстом є сам елемент
    this.style.backgroundColor = 'red';
});

const obj1 = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this); // стрілочна функція не має контексту виклику, вона бере його у батька
        };

        say();
    }
};

obj.sayNumber();

const double11 = a => a * 2;