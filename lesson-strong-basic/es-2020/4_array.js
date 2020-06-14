const arr = ['ab', 'b', ['c', 'd'], ['e', ['f', 'g']]]

console.log(arr.flat())
console.log(arr.flat().flat())
// or
console.log(arr.flat(2))

const techs = ['reac redux', 'angular ngrx', 'vue']
console.log(techs.map(i => i.split(' ')).flat())
