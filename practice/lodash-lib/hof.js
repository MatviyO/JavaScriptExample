//minin
const _ = require('lodash')

function multiple(a, b) {
    return a * b
}

function devide(a, b) {
 return a / b
}
// console.log(multiple(2, 3))
//
// function double(num) {
//     return multiple(num, 2)
// }
// console.log(double(21))
//
// function partial(fn, ...fixed) {
//     return function(...args) {
//         return fn.apply(this, fixed.concat(args))
//     }
// }
// const double1 = partial(multiple, 2)

//lodsh

// function partial(fn) {
//     const fixed = _.tail(_.toArray(arguments))
//     return function(...args) {
//         return fn.apply(this, _.concat(fixed, arguments))
//     }
// }
// const double1 = partial(multiple, 2)
// console.log(double1(21))
//
// const half = partial(devide, 2)


///////////////curry flow
const notFlatArray = [1,2,3,[4,5]]
const subFlat = _.flow([_.concat,_.flattenDeep, _.sum])
