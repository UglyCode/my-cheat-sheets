const fs  = require('fs');

fs.readFile(`${__dirname}/input.txt`, (err, data) => {
    const dataString = data.toString('utf8');

    console.time('floor');
    console.log(dataString.length - 2*dataString.match(/\)/g).length);
    console.timeEnd('floor');

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

