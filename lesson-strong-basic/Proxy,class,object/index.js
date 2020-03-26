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

// practics proxy


const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj) ? obj[prop] : defaultValue
    })
}
const position = withDefaultValue({
    x: 24,
    y: 42,

}, 0)
// hidden properties
const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obs, prop) => (prop in obj) && (!prop.startsWith(prefix)),
        ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver) ? obj[prop] : void 0
    })
}
// optimization
const IndedArray = new Proxy(Array, {
    construct(target, [argArray]) {
        const index = {}
        args.forEach(item => (index[item.id] = item))

        return new target(...args), {
            get(arr, prop) {
                switch (prop) {
                    case 'push': return item => {
                        arr[prop].call(arr,item)
                    }
                    default: return arr[prop]
                }
            }
        }
    }
})
console
