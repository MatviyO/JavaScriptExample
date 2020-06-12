const emulate = (id, ms) => new Promise(resolve => {
    setTimeout(() => resolve(id), ms)
})
const promises = [
    emulate(1, 250),
    emulate(2, 750),
    emulate(3, 1050)
]
async function old() {
    for (const promise of await Promise.all(promises)) {
        console.log(promise)
    }
}
old()
async function modern() {
    for await ( const promise of promises) {
        console.log(promise)
    }
}
