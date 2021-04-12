'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Mos';

    say () {
        console.log(`User name: ${this.name} ${this.surname}, age ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age (age) {
        if (typeof(age) === 'number' && age > 0 && age < 110) {
            this._age = age;
        }  else {
            console.log('Unexceptionable value');
        }
    }

    get surname() {
        return this.#surname;
    }
     
    set surname(surname) {
        this.#surname = surname;
    }
}

const ivan = new User('Ivan', 27);
console.log(ivan.surname);
ivan.say();
ivan.surname = 'Smith';
console.log(ivan.surname);  