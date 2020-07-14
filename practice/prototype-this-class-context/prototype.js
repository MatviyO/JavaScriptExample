const Animal = function (options) {
    this.name = options.name
    this.color = options.color
    // this.voiceB = function () {
    //
    //     console.log(this.name, ' 33')
    // }
}
Animal.prototype.voice = function () {
    console.log(this.name)
}
const dog = new Animal({name: 'rex', color: '#fff'})
dog.voice()
