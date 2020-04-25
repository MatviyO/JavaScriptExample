//1
// function delay(f, ms) {
//
//     return function() {
//         setTimeout(() => f.apply(this, arguments), ms);
//     };
//
// }
//
// let f1000 = delay(alert, 1000);
//
// f1000("test"); // показывает "test" после 1000 мс
//2
// function debounce(f, ms) {
//     let isColumn = false;
//     return function() {
//         if (isColumn) return;
//         f.apply(this, arguments)
//         isColumn = true;
//         setTimeout(() =>  isColumn = false, ms)
//     }
// }
// let f = debounce(alert, 1000);
//
// f(1); // выполняется немедленно
// f(2); // проигнорирован
//this
// let user = {
//     firstName: "Вася",
//     sayHi() {
//         alert(`Привет, ${this.firstName}!`);
//     }
// };
// let sayHi = user.sayHi.bind(user); // (*)
// sayHi(); // Привет, Вася!
// setTimeout(sayHi, 1000); // Привет, Вася!
//1
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//
//     showList() {
//         this.students.forEach(
//             student => alert(this.title + ': ' + student)
//         );
//     }
// };
// group.showList();

let user = {
    name: 'len',
    surname: 'kok',
    get fullname() {
        return this.name + this.surname
    },
    set fullname(value) {
        [this.name, this.surname] = value.split(" ")
    }
}
user.fullname = "alice non"
console.log(user.name)
