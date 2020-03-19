function hello() {
    console.log('hggffffffffello',this)
}

const person = {
    name: 'minaa',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    logInfo: function(job, phone) {
        console.group(`${this.name} info`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job ${job}`)
        console.log(`phone ${phone}`)
        console.groupEnd()
    }
}
const lena = {
    name: 'elena',
    age: 23
}
person.logInfo.bind(lena)()
const array = [1,2,3,4,5]
function myz(arr,n) {
    return arr.map( (i) => {
        return i * n
    })
}
Array.prototype.multy = function (n) {
    return this.map( (i) => {
        return i * n
    })
}

console.log(myz(array, 5))
Array.prototype.bla = function(b, f) {
    return this.map(c => {
        return (c * b) + f
    });
}
console.log(array.bla(5, 2))


// замиканняz  zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
/*
function one(n) {
    return function() {
        console.log(1000 * n)
    }
}

const calc = one(42)
calc()

*/
/*
function inrement(n) {
    return function(num) {
        return n + num
    }
}

const one = inrement(1)

*/

/*
function urlGen(domain) {
 return function(url) {
    return `https://${url}.${domain}`
}
}
const app = urlGen(ua)
console.log(app()
*/


























