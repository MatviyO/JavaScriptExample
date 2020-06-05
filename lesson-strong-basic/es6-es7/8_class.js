// class Person {
//     type = 'human'
//     constructor(name) {
//         this.name = name
//     }
//     greet() {
//         console.log(this.name  + 'hello')
//     }
// }
// const max = new Person('max')
// console.log(max)
// max.greet()

//proxy
function log(message) {
    console.log('[LOG]', message)
}
const proxy = new Proxy(log, {
    apply(target, thisArg, argArray) {
        console.log('target', target)
        console.log('thisArg', thisArg)
        console.log('argArray', argArray)
        if(argArray.length === 1) {
            Reflect.apply(target, thisArg, argArray)
        } else {
            console.log(' argument more ')
        }
    }
})
proxy('one')
