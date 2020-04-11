// function calcValues(a, b) {
//     return [
//         a + b, a - b, a * b, a / b
//     ]
// }
// const [sum,sub] = calcValues(42, 10)
// const [sum,,mult, ...other] = calcValues(42, 10)
// const sum = result[0]
// const sub = result[1]
// const [sub, sub] = result

// console.log(sum, sub)
// objects
const person = {
    name: 'MAx',
    age: 20,
    address: {
        country: 'Ukrain',
        city: 'kiev'
    }
}
// const {name, age, address: {country, city}} = person
// console.log(name,age,country, city)
// const p = {...person}
// console.log(p.name)
// console.log(person)
function logPerson({name, age}) {
    console.log(name + '' + agee)
}
logPerson(person)
