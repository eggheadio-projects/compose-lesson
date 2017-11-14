const trace = require('./trace');
const startVal = 4;

const squared = x => x * x;
const doubled = x => x * 2;
const addTen = x => x + 10;
const halfNum = x => x / 2;

// const result = halfNum(addTen(doubled(squared(startVal))));
const compose = (...fns) => initialVal => fns.reduceRight((val, fn) => fn(val), initialVal);

const result = compose(
    trace('after halfNum'),    
    halfNum,
    trace('after addTen'),
    addTen,
    trace('after doubled'),    
    doubled,
    trace('after squared'),
    squared
)(startVal)


console.log(result);