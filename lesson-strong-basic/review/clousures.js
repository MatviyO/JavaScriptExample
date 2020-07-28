// function sayHelloTo(name) {
//     const message = 'Hello' + name
//     return function () {
//         console.log(message)
//     }
// }
// const hello = sayHelloTo('elena')

function createFrameWork() {
    const fw = ['Angular', 'React'];

    return {
        pring: function () {
            console.log(fw)
        },
        add: function (framework) {
            fw.push(framework)
        }
    }
}

const manager = createFrameWork()
