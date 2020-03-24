const person = Object.create({}, {
    name: {
        value: 'Name',
        enumerable: true,
        writable: true,
        configurable: true
    },
    year: {
        value: 1997
    },
    age: {
        get() {
            console.log(this)
            return new Date().getFullYear() - this.year
        },
        set(value) {
            console.log('set', value)
        }
    }

})

