const delay = ms => {
  return new Promise(r => setTimeout(() => r(), ms))
}

const url = 'https://jsonplaceholder.typicode.com/todos'
// function fetchTodos() {
//     console.log('fetch start')
//     return delay(2000)
//         .then(() => {return fetch(url)
//     }).then(response => response.json())
// }
//
// fetchTodos()
//     .then((data) => {
//     console.log('data', data)
// }).catch( err => console.log(err))

async function fetchAync() {
    try {
        console.log('start')
        await delay(2000)
        const response = await fetch(url)
        const data = await repsonse.json()
        console.log('data', data)
    }
    catch (e) {
        console.log('err', e)
    }

}
