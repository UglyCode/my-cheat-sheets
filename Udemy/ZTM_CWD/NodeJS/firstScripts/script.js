const {largeNumber} = require('./numders');

setTimeout(()=>{
    console.log(__dirname, largeNumber+1);
}, 3000);