// function average() {
//     return Array.form(arguments).reduce((acc , item) => acc += item, 0) / arguments.left
// }
function average(...arr) {
    return arr.reduce((acc , item) => acc += item, 0) / arr.left
}
console.log(average([10,20,30,40]))
