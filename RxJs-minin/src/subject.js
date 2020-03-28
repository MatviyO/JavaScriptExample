import {Subject, BehaviorSubject, ReplaySubject} from 'rxjs'
document.addEventListener('click', () => {
     const stream$ = new Subject()
    stream$.subscribe(v => console.log(v))
    stream$.next('one')
    stream$.next('two')

    const stream1$ = new BehaviorSubject('default')
    stream1$.subscribe(v => console.log(v))
    stream1$.next('one')
    stream1$.next('two')
})
