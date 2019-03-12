const googleSearch  = require('./script');

const dbMock = [
    'dog.com',
    'chocolate.com',
    'youtube.com',
    'webdev.ru',
    'webgoo.com'
];

describe('all for google search', () => {
    it('just silly jest test', () => {
        expect('hello').toBe('hello');
    });

    it('google search function test', ()=> {
        expect(googleSearch('test_gu', dbMock)).toEqual([]);
        expect(googleSearch('web', dbMock)).toEqual(['webdev.ru','webgoo.com']);
    });

    it('work with wierd values', () => {
        expect(googleSearch(NaN, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
        expect(googleSearch(undefined, dbMock)).toEqual([]);

    });

    it('less then 4 result in a time', () => {
        expect(googleSearch(NaN, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
        expect(googleSearch(undefined, dbMock)).toEqual([]);

    });

    it('less then 4 result in a time', () => {
        expect(googleSearch('com', dbMock).length).toEqual(3);
    });
});