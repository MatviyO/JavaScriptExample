// const requestUrl = 'https://jsonplaceholder.typicode.com/users'
//
//
// function sendRequest(method, url, body = null) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()
//         xhr.open(method, url)
//         xhr.responseType = 'json'
//         xhr.setRequestHeader('Congtent-Type', 'application/json')
//         xhr.onLoad = () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.response)
//                 console.error(xhr.response)
//             } else {
//                 resolve(xhr.response)
//                 console.log(xhr.response)
//             }
//         }
//         xhr.onerror = () => reject(xhr.response)
//         xhr.send(JSON.stringify(body))
//
//     })
// }
//
// sendRequest('GET', requestUrl)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// sendRequest('GET', requestUrl)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))




        //////////// fetch
const requestUrl = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
 const headers = {
     'Content-Type': 'application/json'
 }
    return fetch(url, {
     method: method,
     body: JSON.stringify(body),
     headers: headers
 }).then(response => {
     if (response.ok) {
         return response.json()
     }
     return response.json().then(err => {
         const e = new Error()
         e.data =  err
         throw e
     })
 })
}

sendRequest('GET', requestUrl)
    .then(data => console.log(data))
    .catch(err => console.log(err))
// sendRequest('POST', requestUrl, body)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//
