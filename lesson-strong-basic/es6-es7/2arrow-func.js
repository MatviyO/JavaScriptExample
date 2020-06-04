// function sum(a,b) {
//     return a +b
// }
// function cub(a) {
//     return a ** 3
// }
// const sum1 = (a, b) => {
//     return a +b
// }
// setTimeout(() => {
//     console.log('timer')
// }, 1000)
//context
function log() {
    console.log(this)
}
const arrowLog = () => console.log(this)

const person = {
    name: 'Elena',
    age: 20,
    log: log,
    arrowLog: arrowLog,
    delayLog: function () {
        const self = this
        // setTimeout(function () {
        //     console.log(this.name + '' + this.age)      /// no work
        // })
        // setTimeout(function () {
        //     console.log(self.age + '' + self.name)    // work
        // })
        setTimeout(() => {
            console.log(this.name + '' + this.age)      //work
        })
    }
}
person.delayLog()
