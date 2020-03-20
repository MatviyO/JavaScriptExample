console.log('one')

console.log('two')

window.setTimeout(function() {
    console.log('tree1')
}, 1)
console.log('end1')
console.log('end2')

window.setTimeout(function() {
    console.log('tree2')
}, 5)

console.log('end3')
console.log('end4')
console.log('end5')
window.setTimeout(function() {
    console.log('tree3')
}, 3)
window.setTimeout(function() {
    console.log('tree4')
}, 2)
console.log('end6')
console.log('end7')
