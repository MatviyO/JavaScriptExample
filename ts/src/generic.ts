// const cars: string[] = ['Ford', 'Audi']
// const cars2: Array<string> = ['Ford', 'Audi']
//
// const promise = new Promise<string>(resolve => {
//     setTimeout(() => {
//         resolve('promise resolved')
//     }, 2000)
// })
// promise.then( data => {
//     console.log(data)
// })


// function mergeObjects<T, R>(a: T, b: R): T & R {
//     return Object.assign({}, a, b)
// }
// const merged = mergeObjects( { name: 'name'}, {age: 23})
// console.log(merged)



// interface ILength {
//     length: number
// }
// function withCount<T extends ILength>(value: T): {value: T, count: string} {
//     return {
//         value,
//         count: `object ${value.length}`
//     }
// }
// console.log(withCount('jkfdkdfdf dfodfo'))



// function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
//     return obj[key]
// }
// const person = { name: 'jon', age: 23}
// console.log(getObjectValue(person, 'name'))
// console.log(getObjectValue(person, 'age'))
// console.log(getObjectValue(person, 'job'))


//
// class Collection<T> {
//
//     constructor(private _items: T[] = []) {
//
//     }
//
//
//     add(item: T) {
//         this._items.push(item)
//     }
//     remove(item: T) {
//         this._items = this._items.filter( c => c ! == item)
//     }
//     get items(): T[] {
//         return this._items
//     }
// }
// const strings = new Collection<string>(['one','two','thre'])
// strings.add('!')
// strings.remove('two')
// console.log(strings.items)


///============

interface Car {
    model: string
    year: number
}

function createCar(model: string, year: number): Car {
    const car: Partial<Car> = {}

    if ( model.length > 3) {
        car.model = model
    }

    if (year > 2000) {
        car.year = year
    }
    return car as Car
}

//===

const cars: Array<string> = ['ford', 'audi']






