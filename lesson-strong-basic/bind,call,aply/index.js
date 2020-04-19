// let lin = null;
//  let my = undefined
// if ( lin) {
//     console.log('true')
// } else {
//     console.log('false', typeof lin)
// }
// let year = '2014'
//
// if (year == 2015) {
//    console.log('true')
// } else {
//     console.log('no')
// }
// let value = prompt('Какое "официальное" название JavaScript?', '');
//
// if (value == 'ECMAScript') {
//     alert('Верно!');
// } else {
//     alert('Не знаете? ECMAScript!');
// }
////////////////////////////////////
// let currentUser = null;
// let defaultUser = undefined;
//
// let name = currentUser || defaultUser || undefined;
// console.log(name)
// if ( currentUser || defaultUser) {
//     console.log('true')
// }
// let hour = 12;
// let minute = 30;
//
// if (hour == 11 && minute == 30) {
//     console.log('true')}
// let a = 2 + 2;
// /////////
// switch (a) {
//     case 3:
//         console.log('1' );
//         break;
//     case 4:
//         console.log('2!' );
//         break;
//     case 5:
//         console.log('3' );
//         break;
//     default:
//         console.log('4' );
// }
// let a = 2 + 2;
//   /////////
// switch (a) {
//     case 3:
//         console.log( '1' );
//     case 4:
//         console.log( '2!' );
//     case 5:s
//         console.log( '3' );
//     default:
//         console.log( '4' );
// }
///////////////////
// let a = ''
// if (!a){
//     console.log('1')
// } else { console.log('2')}
////////////////////
// let foo = {
//     name: 'oleh',
//     baz: function() {
//         console.log(this);
//     }
// }
// foo.baz();
// let bar = foo.baz;
// bar();
///////////////////////
// m = function () {
//     this.x = 5;
//     console.log(this.x);
//     (function() {
//         this.x = 3
//         console.log(this.x)
//     })();
//     console.log(this.x)
//     console.log(this)
// }
// const ob = {x: 2}
// m()
// console.log(this)
///////////////////////////
// var f = function() {
//     this.x = 5;
//     (function() {
//         this.x = 3;
//     })();
//     console.log(this.x);
// };
//
// var obj = {x: 4, m: function() {
//         console.log(this.x);
//     }};
//
// f();
// new f();
// obj.m();
// new obj.m();
// f.call(f);
// obj.m.call(f);
////////////////////////
// function f() {
//     this.x = 5;
//     console.log(this)
//     console.log(this === window); // false
// }
// var o = new f();
// console.log(o.x === 5); // true
///////////////////////
// var o = {
//     f: function() {
//         console.log(this)
//         return this;
//     }
// }
// console.log(o.f() === o); // true
//////////////
// var bar = "bar2";
//
// function daz(){
//     var bar = "bar5";
//     (function maz(){
//
//         console.log(this.bar);
//     })()
//     // maz();
// }
// daz();  // bar2
////////////////////////

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// };
//
// for (let key in user) {
//     // ключи
//     console.log( key );  // name, age, isAdmin
//     // значения ключей
//     console.log( user[key] ); // John, 30, true
// }
//////////////////
// let user = {
//     name: "John",
//     age: 30,
//     fi() {console.log(this.name)}
// };
// user.fi()
// let my = user
// console.log(my == user)
let fruits = ["Яблоко"];

fruits.push("Апельсин", "Груша");
fruits.unshift("Ананас", "Лимон");

// ["Ананас", "Лимон", "Яблоко", "Апельсин", "Груша"]
alert( fruits );
