const fetch = require('node-fetch');
const swapi = require('./script2.js');

it('swapi gets people', (done) => {
    expect.assertions(1);
    swapi.getCharactersPromise(fetch).then(data => {
        expect(data.count).toEqual(87);
        done();
    })
});

it('swapi gets people promise', () => {
    expect.assertions(2);
    return swapi.getCharacters(fetch).then(data => {
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5);
    })
});

it('get swapi with mock', () => {
    const mockFetch = jest.fn()
        .mockReturnValue(Promise.resolve({
            json: () => Promise.resolve({
                count: 87,
                results: new Array(87)
           })
       }));

    expect.assertions(4);
    return swapi.getCharactersPromise(mockFetch)
        .then(data => {
            expect(mockFetch.mock.calls.length).toBe(1);
            expect(mockFetch).toBeCalledWith('https://swapi.co/api/people');
            expect(data.count).toEqual(87);
            expect(data.results.length).toBeGreaterThan(5);
        });
});