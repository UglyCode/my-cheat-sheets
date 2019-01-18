'use strict';
function delay(ms) {
    return new Promise((res, rej) =>{
        setTimeout(res,ms);
    });
}

delay(3000).then(() => console.log('runs after 3 seconds'));


new Promise(function(resolve, reject) {
        throw new Error("Whoops!");
    })

    .catch(function(error) { // (*)
        if (error instanceof URIError) {
            // handle it
        } else {
            console.log("Can't handle such error");
 //           throw error; // throwing this or another error jumps to the next catch
        }
    })

    .then(()=> bla())



    .then(function() {
        console.log('2');
    })

    .catch(error => { // (**)
        console.log(`The unknown error has occurred: ${error}`);
        // don't return anything => execution goes the normal way
    })

    .then(()=>console.log('3'))

    .then(()=>console.log('4'));