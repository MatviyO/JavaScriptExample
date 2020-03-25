const person = {
    name: 'Name',
    age: 25,
    job: 'fullstack'
}

const op = new Proxy(person, {
    get(target, prop) {
        console.log(`getting prop ${prop}`)
        if (!(prop in taret)) {
           return prop.split('_').map(p => {
               target[p].join(' ')
           })
        }
        return target[prop]
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value
        } else {
            throw new Error('no field target')
        }
    },
    has(target, prop) {
        return ['age', 'name', 'job'].includes(prop)
    },
    deleteProperty(target, prop) {
        console.log('deliting', prop)
        delete target[prop]
        return true
    }
})
// functions

const log = text => `log ${text}`

const fp = new Proxy(log, {
    apply(target, thisArg, argArray) {
        console.log('calling')
        return target.apply(thisArg, argArray).toUpperCase()
    }
})

// classes
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy(Repson, {
    construct(target, argArray, newTarget) {
        console.log('constcruct')
        return new Proxy(new target(...args), {
            get(t, prop) {
                console.log('getting prop')
                return t[prop]
            }
        })
    }
})
const p = new PersonProxy('maxim', 30)
