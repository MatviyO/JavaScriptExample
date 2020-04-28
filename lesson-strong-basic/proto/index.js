// const person = { name: 'jpn'}
// console.log(person)
// function f() {
//     console.log('name')
// }
// f()

// var stalin = {
//     gulag: true,
//     mustache: true,
//     hero: 1
// }
// var lenin = {
//     baldHead: true,
//     armand: false,
//     criticalImperialism: true
// }
// stalin.__proto__ = lenin;
// for (let key in stalin) {
//     if (stalin.hasOwnProperty(key)) console.log(key + ": " + stalin[key])
// }
// console.log(stalin.baldHead);  //  true
// console.log(stalin)
// var marks = {
//     marxism: true,
//     engels: "friend",
//     beard: 80
// }
// function f(name) {
//     this._name = name
//     this.__proto__ = marks;
// }
// let k = new f('nike')
// console.log(k)
// function f(n) {
//  return function() {
//     console.log(1000 * n )
//  }
// }
//
// const calc = f(42)
// calc()
// const m = f(52)
// m()
