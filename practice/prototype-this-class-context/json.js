// let user = {
//     name: "Василий Иванович",
//     age: 35
// };
//
// let user2 = user.json();
// console.log(user2)

// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
// };
//
// let json = JSON.stringify(student);
//
// alert(typeof json); // мы получили строку!
//
// alert(json);
let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
};

room.occupiedBy = meetup; // room ссылается на meetup

console.log( JSON.stringify(meetup) );
