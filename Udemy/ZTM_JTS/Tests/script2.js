const fetch = require('node-fetch');


const getCharactersPromise = fetch => {
  return fetch('https://swapi.co/api/people')
      .then(resp => resp.json())
      .then(data => {
          return {
              count: data.count,
              results: data.results
          }
      });
};


const getCharacters = async (fetch) => {
    const resp  = await  fetch('https://swapi.co/api/people');
    const data = await resp.json();
    return {
        count: data.count,
        results: data.results
      }
};


module.exports = {
  getCharacters,
  getCharactersPromise
};