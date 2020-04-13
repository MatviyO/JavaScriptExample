const myNumber = 42
// localStorage.getItem('number', myNumber.toString())
// localStorage.setItem('number', myNumber.toString())
// localStorage.removeItem('number')
// localStorage.clear()
//
// const object = {
//     name: 'oleh',
//     age: 23
// }
// localStorage.setItem('key', JSON.stringify(object))
// console.log(object)

window.addEventListener('storage', event => {
    console.log(event)
})
