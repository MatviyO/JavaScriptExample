//
// let mass = ["one", "two"]
// mass.push("three")
// let k = Math.round((mass.length) / 2)
// mass[k - 1] = "rock"
// console.log(k)
// console.log(mass.shift())
//
// console.log(mass)
//
//
// function sumSalaries(salaries) {
//  let sum = 0;
//  for (let salary of Object.values(salaries)) {
//   sum += salary;
//  }
//  return sum; // 650
// }
// let salaries = {
//  "John": 100,
//  "Pete": 300,
//  "Mary": 250
// };
// alert( sumSalaries(salaries) ); // 650
//
// const person = {
//     name: 'link'
// }

// function f(phone, email) {
//     console.log(this.name, phone, email)
// }
//
// let m = f.bind(person, '123', 'email')()

//1
// function bindd(fn, context, ...rest) {
//     return fn.bind(context, ...rest)
// }
//
// bindd(f, person, '123', 'email')()

//2
// const person = {
//     name: 'link'
// }
//
// function info(phone, email) {
//     console.log(this.name, phone, email)
// }
//
// function bindd(fn, context, ...rest) {
//     return function (...args) {
//         const uniq = Date.now().toString()
//         context[uniq] = fn
//         const result = context[uniq](...rest.concat(args))
//         delete context[uniq]
//         return result
//     }
// }
// bindd(info, person, '123', 'email')()
//4
const person = {
    name: 'link',
}
function info(phone, email) {
    console.log(this.name, phone, email)
}
// function bii(fn, context, ...rest) {
//     return function (...args) {
//      return fn.apply(context, rest.concat(args))
//     }
// }
// function bi2(fn, context, ...rest) {
//  return function (...args) {
//      return fn.call(context, ...rest.concat(args))
//
//  }
// }
// bii(info, person, '123', 'email')()
// bii(info, person)('123', 'email')
// bi2(info, person, '123', 'email')()
// bi2(info, person)('123', 'email')

//call
function call(fn, context, ...args) {
    const uniq = Date.now().toString()
    context[uniq] = fn
    const result = context[uniq](...args)
    delete context[uniq]
    return result
}
call(info, person, '123', 'email')

































































