// lesson 1
//||
let stream$ = Rx.Observable.create((observer) => {
    observer.next('one');
    setTimeout(() => {
        observer.complete('After 3 seconds')
    }, 3000);
    setTimeout(() => {
        observer.next('After 2 seconds')
    }, 2000);
    setTimeout(() => {
        observer.next('After 5 seconds')
    }, 5000);
    observer.next('after two');
});
stream$.subscribe(
    (data) => {
        console.log('subscribe', data);
    }, (error) => {
        console.log(error);
    },
    () => {
        console.log('Completed!lesson 1');
    }
);
// LESSON 2 fromEvent

                   // VERSION 5.3.0
//||
let button = document.querySelector('button');

let btn$ = Rx.Observable.fromEvent(button, 'click');
btn$.subscribe((e) => {
    console.log(e);
})

delay().

// let input = document.querySelector('input');
// let input$ = Rx.Observable.fromEvent(input, 'keyup')
//     .subscribe(e => {
//         console.log(e);
// })
// Rx.Observable.fromEvent(document, 'mousemove').subscribe( e => {
//     console.log(e);
// })



//Lesson 3
//


function createSubscribe(name) {
   return {
       next(x) {
           console.log(name,': ', x)
       },
       error(err) {
           console.log('Error: ', err)
       },
       complete(err) {
           console.log(name,': completed ')
       }
   }
}


// Rx.Observable.of(1,2,10)
//     .subscribe(createSubscribe('interval'));
//
//


//  LESSSON 4


// Rx.Observable.from([1, 2, 3])
//     .subscribe(createSubscribe('from'))

//     LESSON 5 STREAM PROMISE
// function delay(ms = 1000) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(ms);
//         }, ms)
//     })
// }
// delay(3000).then(() => {
//     console.log('promise was resolved')
// })
// const p$ = Rx.Observable.fromPromise(delay(4000));
//
// p$.subscribe(createSubscribe('fromPromise'))



//          LESSON 6 MAP , PLUG

// Rx.Observable.fromEvent(document.querySelector('input'), 'keyup')
    // .map(x => {
    //     return x.target.value
    // })
    // .pluck('target', 'value')
    // .map(x => {
    //     return  x.toUpperCase()
    // })
    // .map( x => {
    //     return {
    //         value: x,
    //         length: x.length
    //     }
    // })
    // .subscribe(createSubscribe('map'));
    //


//          LESSON 7 OPERATE FOR VIBOR

// Rx.Observable.of(1,5, 'helo', 'fdkjdjkfjk')
//     .find( x => {
//       return  x === 5
//     })
//
//     .subscribe(createSubscribe('first'))



//              LESSON 8 filters

// const cars = [
//     {
//         name: 'audi',
//         price: 500
//     },
//     {
//         name: 'bmw',
//         price: 900
//     }
// ];

// Rx.Observable.range(0, 10)
//     .filter( x => {
//         return x > 3
//     })
//     .subscribe(createSubscribe('filter'))

// Rx.Observable.fromEvent(document.querySelector('input'), 'keyup')
//     .map(e => e.target.value)
//     .subscribe( x => {
//         Rx.Observable.from(cars)
//             .filter(c => {
//                 return c.name === x
//             })
//             .subscribe( v => {
//                    document.querySelector('div')
//                        .innerHTML = `<h2>${v.name.toUpperCase()}</h2><h4>${v.price}</h4>`;
//             })
//     });

// Rx.Observable.fromEvent(document.querySelector('input'), 'keyup')
//     .map(e => e.target.value)
//     .distinct()
//     .subscribe(createSubscribe('debounceTime'));
//

//               LESSON 9 BUFFER

// Rx.Observable.range(0, 40)
//     .bufferCount5()
//     .subscribe(createSubscribe('buffer'));
//


                // LESSON 10 utiliti

// Rx.Observable.from([1,2,3,4,5])
//     .do( x => {
//         console.log(x)
//     })
//     .subscribe(createSubscribe('every'))


                // LESSON 11 MERGE STREAM

// const s1 = Rx.Observable.interval(1000).map(x => 'stream 1' + x)
// const s2 = Rx.Observable.interval(500).map(x => 'stream 2 ' + x)

// s1.merge(s2).subscribe(createSubscribe('merge'))
// Rx.Observable
//     .merge(s1, s2)
//     .take(12)
//     .subscribe(createSubscribe('merge'))
// Rx.Observable.range(1, 3) // 1, 2, 3
//     .map( x => {
//          return Rx.Observable.range(1, 3)
//     })
//     .mergeAll()
//     .subscribe(createSubscribe('mergeAll'))
//
