// const Animal = function (options) {
//     this.name = options.name
//     this.color = options.color
//     // this.voiceB = function () {
//     //
//     //     console.log(this.name, ' 33')
//     // }
// }
// Animal.prototype.voice = function () {
//     console.log(this.name)
// }
// const dog = new Animal({name: 'rex', color: '#fff'})
// // dog.voice()
//
// const Cat = function(options) {
//    Animal.apply(this, arguments)
//     this.hasTail = options.hasTail
//
// }
// Cat.prototype = Object.create()
// Cat.prototype.constructor = Cat;
//
// Animal.prototype.voice = function () {
//     console.log(this.name, 'render new method')
// }
//
// const cat = new Cat({ name: 'Murzik', color: '#000', hasTail: true})
// console.log(cat)


class Animal {
    constructor(options) {
        this.name = options.name
        this.color = options.color
    }
    voice() {
        console.log('base voice', this.name)
    }
}

const dog = new Animal({ name: "rex", color: '#000'})


class Cat extends Animal {
    constructor(options) {
        super(options)
        this.hasTail = options.hasTail
        this.type = 'cat'
    }
    voice() {
        super.voice();
        console.log('new method', this.name)
    }
}

const cat = new Cat({ name: 'Murzik', color: '#000', hasTail: true});



//examples

Object.prototype.print = function() {
   console.log(` i am object `, this)
}

cat.print()

Array.prototype.myMap = function () {
    console.log('array to map', this)
    return this.map.apply(this, arguments)
}
String.prototype.toTag = function(tagName) {
    return `<${tagName}>{this}</${tagName}>`
}
console.log('eminem'.toTag('strong'))

Number.prototype.toBigInt = function () {
    return BigInt(this)
}
const number = 42;
console.log(number.toBigInt())




















