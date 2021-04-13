'use strict';

try {
    console.log('Normal');
    console.log(a);
} catch(e) {
    console.log(e.name);
    console.log(e.message);
    console.log(e.stack);
} finally {
    
}

console.log('After error');