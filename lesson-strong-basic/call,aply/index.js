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
function debounce(f, ms) {
    let isColumn = false;
    return function() {
        if (isColumn) return;
        f.apply(this, arguments)
        isColumn = true;
        setTimeout(() =>  isColumn = false, ms)
    }
}
let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован
