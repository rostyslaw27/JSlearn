const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

console.log(btns[0].classList.length); // кількість класів в кнопки

console.log(btns[0].classList.item(0)); //перший клас

console.log(btns[0].classList.add('red', 'green')); // додавання класу

console.log(btns[0].classList.remove('blue'));

console.log(btns[0].classList.toggle('blue')); // якщо є - видаляє, якщо немає - додає

if (btns[1].classList.contains('red')) {
    console.log('red');
}

btns[0].addEventListener('click', () => {
    if(!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }

    btns[1].classList.toggle('red');
});

console.log(btns[0].className);

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == 'BUTTON' && event.target.matches('button.red')) {
        console.log('Hello');
    }
}); // делегування

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);