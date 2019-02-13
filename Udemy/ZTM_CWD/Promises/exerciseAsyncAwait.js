// Solve the below problems:
const fetch = require('node-fetch');

// #1) Convert the below promise into async await
async function fetchData() {
  const response = await fetch('https://swapi.co/api/starships/9/');
  const jsonData = await response.json();
  console.log(jsonData);
}

fetchData();

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicoe.com/albums'
]

const getData = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(
        async function (url) {
          const urlData = await fetch(url);
          return await urlData.json();
        }
    ));
    console.log('users', users);
    console.log('posta', posts);
    console.log('albums', albums);

  } catch (e) {
    console.log(e, 'ooooopas!')
  }
};

getData();
// #3) Add a try catch block to the #2 solution in order to catch any errors.
// Now chnage one of the urls so you console.log your error with 'ooooooops'
