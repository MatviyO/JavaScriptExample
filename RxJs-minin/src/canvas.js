import {fromEvent} from 'rxjs'
import {map, pairwise, switchMap, takeUntil} from 'rxjs/operators'

const canvas = document.querySelector('canvas')

const ctx = canvas.getContext('2d')
const rect = canvas.getBoundingClientRect()
const scale = window.devicePixelRatio

canvas.width = rect.width * scale
canvas.height = rect.height * scale

ctx.scale(scale, scale)

const mouse$ = fromEvent(canvas, 'mousemove')
const mouseDown$ = fromEvent(canvas, 'mousedown')
const mouseUp$ = fromEvent(canvas, 'mouseup')
const steam$ = mouseDown$.pipe(
    switchMap(() => {
        return  mouse$
            .pipe(
                map(e => ({
                    x: e.offsetX,
                    y: e.offsetY
                })),
                pairwise(),
                takeUntil(mouseUp$)
            )
    })
)

steam$.subscribe(([from, to]) => {
        console.log(pos)
        ctx.beginPath()
        cts.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        ctx.stroke()
    })
