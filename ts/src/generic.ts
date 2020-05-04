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
