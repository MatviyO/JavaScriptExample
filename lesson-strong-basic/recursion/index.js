// let company = { // тот же самый объект, сжатый для краткости
//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//     development: {
//         sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//         internals: [{name: 'Jack', salary: 1300}]
//     }
// };
//
// // Функция для подсчёта суммы зарплат
// function sumSalaries(department) {
//     if (Array.isArray(department)) { // случай (1)
//         console.log('if', department)
//         return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
//     } else { // случай (2)
//         let sum = 0;
//         for (let subdep of Object.values(department)) {
//             console.log(subdep)
//             sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
//         }
//         console.log(sum, 'else')
//         return sum;
//     }
// }
//
// alert(sumSalaries(company)); // 6700
//2
// function cum(n) {
//     for (let i = 0; i <=n; i++) {
//         sum += i
//     }
//     return sum
// }
// console.log(cum(100))
//
// function suc(n) {
//     if (n == 1) return 1
//     return n + suc(n - 1)
// }
//3
// function fac(n) {
//     return (n != 1) ? n * fac(n -1) : 1
// }
// console.log(fac(5))
//fibonachi
// let person = {
//     name: "John",
//     sayHi: function() {
//     console.log("Hi, ", this.name);}
// }
// console.log(person.sayHi())
//zamekanie

// function f() {
//     let count = 0;
//     return function () {
//         return count++;
//     }
// }
// let counter = f();
// console.log(counter())

function getCounter() {
    let counter = 0;
    return function() {
        return counter++;
    }
}
let count = getCounter();
let count1 = getCounter();
console.log(count());  // 0
console.log(count());  // 1
console.log(count1());  // 1
console.log(count());  // 2










