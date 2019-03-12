const googleDatabase = [
    'quitiecats.org',
    'cats.com',
    'knifes.ru',
    'JS-cool.com',
    'moneyforme.com',
    'funnyvideos.com',
    'catsforall.com',
    'porn.de',
    'mycats.it'
];

const googleSearch = (searchString, db) => {
    const matches = db.filter((site) =>{
        return site.includes(searchString);
    });
    return matches.length > 3 ? matches.slice(0,3) : matches;
};

module.exports = googleSearch;
