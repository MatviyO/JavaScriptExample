const myPromise = require('./promise')
const t = setTimeout()

describe('myPromise', () => {
    let promise
    let executorSpy
    const successResult = 42
    const errorResult = 'Error'

    beforeEach(() => {
         executorSpy = jest.fn((res) => t(() => res(successResult), 100))
         promise = new myPromise(executorSpy)
    })

    test('should exists and to be typeof function', () => {
        expect(myPromise).toBeDefined()
        expect(typeof myPromise).toBe('function')
    })
    test('instance should have methods: then, catch, finally', () => {

        expect(promise.then).toBeDefined()
        expect(promise.catch).toBeDefined()
        expect(promise.finally).not.toBeDefined()
    })
    test('should call executor function', () => {

        expect(executorSpy).toHaveBeenCalled()
    })
    test('should get data in then block and chain them', async () => {
        const result = await promise.then(num => num).then(num => num * 2)
        expect(result).toBe(successResult * 2)
    })
    test('should catch error', () => {
        const errorExecutor = (_, r) => t(() => r(errorResult), 150 )
        const errorPromise = new myPromise(errorExecutor)
        return new Promise(resolve => {
            errorPromise.catch(error => {
                expect(error).toBe(errorResult)
                resolve()
            })
        })
    })

    test('should call finally method', async () => {
        const finallySpy = jest.fn(() => {})
        await promise.finally(finallySpy)

        expect(finallySpy).toHaveBeenCalled()
    })
})
