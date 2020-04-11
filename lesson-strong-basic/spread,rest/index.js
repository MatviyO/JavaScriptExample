console.log('Request data...')
//
// setTimeout(() => {
//     console.log('preparing data')
//     const back = {
//         server: 'aws',
//         porst: 2000,
//         status: 'ok'
//     }
//     setTimeout(() => {
//         back.modified = true
//         console.log('Data recevied', back)
//     }, 2000)
// }, 2000)

// const p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('preparing data')
//         const back = {
//             server: 'aws',
//             porst: 2000,
//             status: 'ok'
//         }
//         resolve(back)
//     }, 2000)
// })
// p.then((data) => {
//     const p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         }, 2000)
//     })
// }).then(data1 => {
//     data1.fromMy = true
//     return data1
// }).then(data2 => {
//     console.log('data2', data2)
// })
//     .catch(err => console.log('error', err))
//     .finally(() => console.log('finaly'))

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

// sleep(2000).then(() => console.log('after to seconds'))
Promise.all([sleep(2000), sleep(3000)])
    .then(() => {
        console.log('finish')
    })
