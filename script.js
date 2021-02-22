"use strict";
// defer - загружає скрипт в фоновому режимі, чекає поки не загрузиться DOM
const p = document.querySelectorAll('p');
console.log(p);

// async - загружає скрипт в фоновому режимі, не чекає загрузки DOM


//dynamic

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript("js/test.js");
loadScript("js/some.js");
