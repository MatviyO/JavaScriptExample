// class Clock {
//     constructor({ template }) {
//         this.template = template;
//     }
//
//     render() {
//         let date = new Date();
//
//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
//
//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;
//
//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
//
//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
//
//         console.log(output);
//     }
//
//     stop() {
//         clearInterval(this.timer);
//     }
//
//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//     }
// }
//
//
// let clock = new Clock({template: 'h:m:s'});
// clock.start();




//2
// class Animal {
//
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }
//
//     run(speed) {
//         this.speed = speed;
//         alert(`${this.name} бежит со скоростью ${this.speed}.`);
//     }
//
//     stop() {
//         this.speed = 0;
//         alert(`${this.name} стоит.`);
//     }
//
// }
//
// class Rabbit extends Animal {
//     hide() {
//         alert(`${this.name} прячется!`);
//     }
//
//     stop() {
//         super.stop();
//         this.hide();
//     }
// }
//
// let rabbit = new Rabbit("Белый кролик");
//
// rabbit.run(5);
// rabbit.stop();
