import {interval, fromEvent} from 'rxjs'
import {map} from 'rxjs/operators'

fromEvent(docuemnt, 'click')
    .subscribe(() => {
        const stream$ = interval(1000)
            .pipe(
                take(5),
                reduce((acc, v) => acc + v, 0)
            )
        stream$.subscribe({
            next: v => console.log(v),
            complete: () => console.log('finish')
        })
    })


// const stream$ = interval(1000)
//     .pipe(
//         map((v) => v * 2),
//         filter(v => v % 2 === 0)
//     )
//
// stream$.subscribe({
//     next: v => console.log(v),
//     complete: () => console.log('finish')
// })
//
