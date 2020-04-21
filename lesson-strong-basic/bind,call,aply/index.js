//
// let mass = ["one", "two"]
// mass.push("three")
// let k = Math.round((mass.length) / 2)
// mass[k - 1] = "rock"
// console.log(k)
// console.log(mass.shift())
//
// console.log(mass)
//
//
function sumSalaries(salaries) {

 let sum = 0;
 for (let salary of Object.values(salaries)) {
  sum += salary;
 }

 return sum; // 650
}

let salaries = {
 "John": 100,
 "Pete": 300,
 "Mary": 250
};

alert( sumSalaries(salaries) ); // 650
