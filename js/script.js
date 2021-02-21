"use strict";

function learnJS(lang, callback) {
    console.log(`I'm learning ${lang}`);
    callback();
}

function done() {
    console.log('I finished this lesson');
}

learnJS('JavaScript', done);