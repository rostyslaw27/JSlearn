const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage');

function calcOfDouble(number, basis = 2) {
    console.log(number * basis);
}

calcOfDouble(3, 5);