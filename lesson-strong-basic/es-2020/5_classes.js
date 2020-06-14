class Person {
    static type = 'human'
    static #area = 'earth'
    name = 'ink'
    #year = 1993
    constructor(name) {
        this.name = name
    }
    get age() {
        return new Date().getFullYear() - this.#year

    }
    set age(age) {
        if (age > 0) {
            this.#year = new Date().getFullYear() - age
        }
    }

}
const p = new Person('max')


console.log(p.name)
