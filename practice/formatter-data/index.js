// minin challenge 2
const decimal = time => moment().startOf('d').add(time, 'h')

const interval =({start, end}) => {
    const f = 'h:mm A'
    return `${decimal(start).format(f)} - ${decimal(end).format(f)}`
}
const filter = item => !!item
const day = d => moment(d, 'dddd').format('ddd')

const format = ({time, names}) => {
    if (names.length === 1) {
        return `${day(names[0])}: ${time}`
    }
    return `${day(names[0])} - ${day(names[names.length - 1])}: ${time}`
}
const tooHTML = item => `<li>${item}</li>`
const append = (html, selector) => document.querySelector(selector).innerHTML = html

const toIntervals = ({order, days}) =>  {
    let key = 0
    let prev
    return order.reduce((group, day) => {
        if (!days[day]) {
            key++
            return group
        }
        const time = interval(days[day])
        if (prev !== time) {
            key++
            prev = time
        }
        if (!group[key]) {
            group[key] = {names:[], time: time}
        }
        group[key].names.push(day)
        return group

    }, [])

}
function convert(src, index) {
    const html = toIntervals(src)
        .filter(filter)
        .map(format)
        .map(tooHTML)
        .join(' ')
    append(html, `#box${index + 1} ul`)
}
[source, source2, source3].forEach(convert)
