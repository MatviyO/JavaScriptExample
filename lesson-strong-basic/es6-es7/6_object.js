const person = {
    age: 26,
    name : 'jon',
    'country': 'ua',
    toSto() {
        return Object
            .keys(this)
            .filter(key => key !== 'toSto')
            .map(item => this[item])

    }
}
console.log(person.toSto())


//methods
const fitst = {a: 1}
const too = {b: 2}

console.log(Object.is(20,10))
console.log(Object.assign({}, fitst, too))

const obj = {
    a: 1,
    c: 2,
    b: 5
}
console.log(obj.e)

// import * as Module fro ' bla bla'
