"use strict";

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width); // додає присвоєння конструктора батька ЗАВЖДИ ПОВИННА БУТИ ПЕРШОЮ
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}`);
    }
}

const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea());