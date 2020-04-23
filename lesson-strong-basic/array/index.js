// function came(str) {
//     let s = str.split('-')
//     let b = s[1].toUpperCase()
//     s[1] = b
//     console.log(s)
//     let k = s.join('')
//     console.log(k)
//     return k
// }
// console.log(came("background-color"))

//2
// function fil(arr, a, b) {
//     return arr.filter(item => a <= item && item <=b )
// }
//
// let arr = [2, 6,4 ,9]
// console.log(fil(arr, 1, 4))
//3
// let arr = [5, 2, 1, -10, 8];
//
// arr.sort((a,b) => b -a)

//revrited code (shorting)
//1
// const num = 42
//plan1
//let result
// if (num > 20) {
//     result = 'more than 20'
// } else {
//     result = 'lest than 20'
// }
//plan2
// const result = num > 20 ? 'more 20': 'les20s'
// console.log(result)

//2
// let variable
// let variable2
//
// if (variable) {
//     variable2 = variable
    // }

//3
// const names = ['one', 'two','three']
// for (let key of names) {
//   console.log(key)
// }
// for (let index in names) {
//     console.log(index)
//     console.log(names[index])
// }
// names.forEach((el,index) => console.log(index, el))
//
// const port = process.env.PORT || 4200 // якшо переш начення тру , або друге
// 7

// for (let i = 0; i < 10000; i++){}
// for (let i = 0; i < 10e6; i++) {}
//

//8
// const a = 1, b=2
// const obj = {
//     a: a,
//     b:  b
// }
//9
// function rgb(r, g, b) {
//     if ( r && g && b) {
//     }
// }
//10
// const alert = window.alert
// const confirm = window.confirm
// const prompt = window.prompt
//
// const {alert, confirm, propmt} = window
//13
// const arr1 = [1,2,3]
// const nums = [4,5,6].concat(arr1)
// const cloned = nums.concat()
// //abo
// const num1 = [4,5,6, ...arr1]
// const cloned1 = [...num1]
//14
// const int = parseInt('42')
// const int1 = +'42'

//15
if ([1,2, 3].indexOf(3) >-1) {}
if (~[1,2, 3].indexOf(3) >-1) {}
if (!~[1,2, 3].indexOf(3) >-1) {}






