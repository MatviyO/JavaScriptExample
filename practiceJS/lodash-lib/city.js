const _ = require('lodash')
const cities = require('./data.json')

// const output = _(cities)
//     .filter(c => c.population > 5000000)
//     .countBy(c => c.country)
//     .toPairs()
//     .map(c => _.zipObject(['country', 'cities'], c))
//     .orderBy(c => c.cities, 'desc')
//     .taker(5)
//     .value()
//
// console.log(output)

//====

const greatThen = _.curryRight(_.gte)
const populationThen = num => _.conforms({population: greatThen(num)})
const zip = _.curry(_.zipObject)

const out = _(cities)
.filer(populationThen(5000000))
    .countBy('country')
    .toPairs()
    .map(zip(['country', 'cities']))
    .orderBy('cities', 'desc')
    .take(6)
    .value()
