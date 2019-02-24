const fs  = require('fs');

fs.readFile(`${__dirname}/input.txt`, (err, data) => {
    const dataString = data.toString('utf8');

    console.time('floor');
    console.log('floor', dataString.length - 2*dataString.match(/\)/g).length);
    console.timeEnd('floor');

    console.time('floor2');
    const directionsArray = dataString.split('');
    const answer = directionsArray.reduce((acc, curr)=>{
        if (curr==='('){
            return ++acc;
        } else{
            return --acc;
        }
    }, 0);
    console.log('floor2', answer);
    console.timeEnd('floor2');

    console.time('basement');
    let floor = 0;
    for (let i = 0; i < dataString.length; i++ ){
        (dataString[i] === '(') ? floor++ : floor--;
        if (floor === -1) {
            console.log(i+1);
            break;
        }
    }
    console.timeEnd('basement');
});

