import {of, from, Observable, fromEvent, range, timer, interval} from 'rxjs'
import {map, scan} from 'rxjs/operators'

// const stream$ = of(1,2,3,4)

// stream$.subscribe(n => console.log(val))

// const arr = from([1,2,3,4]).pipe(
// scan((acc, v) => acc.concat(v), []))
// arr.subscribe(v => console.log(v))
// const stream$ = new Observable( observer => {
//     observer.next('first value')
//     setTimeout( () => observer.next('after 1000'), 1000)
//     setTimeout( () => observer.next('afte 3000'), 3000)
// })
// stream$.subscribe(val => console.log('val', val))
// fromEvent(document.querySelector('canvas'), 'mousemove')
//     .pipe(
//         map(e => ({
//                 x: e.offsetX,
//                 y: e.offsetY,
//                 ctx: e.target.getContext('2d')
//
//             })
//         )
//     )
//     .subscribe(p => p.ctx.fillRect(p.x, p.y, 2, 2))

// timer(2500).subscribe( y => console.log(y))
// range(42, 10).subscribe(y => console.log(y))
