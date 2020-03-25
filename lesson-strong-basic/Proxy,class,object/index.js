const person =  {
    name: 'Maxim',
        age: 25,
        greet: function () {
        console.log('greet')
    }
}

const person1 = new Object({
    name: 'Maxim',
    age: 25,
    greet: function () {
        console.log('greet')
    }
})

Object.prototype.sayHello = function () {
    console.log('hello')
}
const lena = Object.create(person)
lena.name = 'elena'
