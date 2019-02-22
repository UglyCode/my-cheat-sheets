const  http = require('http');

const server = http.createServer((req, resp)=>{
    console.log(req.headers, req.method, req.url);
    resp.setHeader('Content-Type', 'application/json');
    resp.end(JSON.stringify({name: 'Anton', employer: 'yandex'}));
});

server.listen(3001);