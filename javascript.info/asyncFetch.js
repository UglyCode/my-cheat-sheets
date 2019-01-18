'use strict';
// const fetch = require('node-fetch');

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'http://no-such-url'
];

Promise.all(urls.map((url)=>{
    return fetch(url)
        .catch(promosifyError);
}))
    .then(responses => {
        // 3 urls => 3 array members
        console.log('Logged: ' + responses[0].status); // 200
        console.log('Logged: ' + responses[1].status); // 200
        console.log('Logged: ' + responses[2]); // TypeError: failed to fetch (text may vary)
    });


let urls2 = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

// make fetch requests
Promise.all(urls2.map(url => {
    return fetch(url)
        .catch(promosifyError)
    }
))
// map each response to response.json()
    .then(responses => Promise.all(
        responses.map(r => {
            try {
                return r.json()
            } catch (e) {
                return promosifyError(e)
            }
        })
    ))
    // show name of each user
    .then(users => {  // (*)
        for(let user of users) {
            console.log('logged2: ' + user.name);
        }
    });

function promosifyError(err){
   return Promise.resolve(err);
}