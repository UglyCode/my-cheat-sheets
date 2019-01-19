'use strict';

console.log('some synchronise code 1');

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

console.log('some synchronise code 2');

async function loadJson(url) {

    let response = await fetch(url);

    if (response.status === 200) {
        return response.json();
    } else {
        throw new HttpError(response);
    }

}

console.log('some synchronise code 3');
// Ask for a user name until github returns a valid user
async function demoGithubUser() {

    while (true) {

        let name = prompt("Enter a name?", "iliakan");
        try {
            let user  = await loadJson(`https://api.github.com/users/${name}`);
            alert(`Full name: ${user.name}.`);
            return user;
        } catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("No such user, please reenter.");
            } else {
                throw err;
            }
        }

    }

}

console.log('some synchronise code 4');
console.log(demoGithubUser());

loadJson('no-such-user.json') // still promise. I can catch()
    .catch(err=> console.log('catched: ' + err)); // Error: 404

console.log('some synchronise code 5');