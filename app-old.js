const http = require('http');

http.createServer((req, res) => {
    res.write('Hello world');
    res.end();
})
.listen(3000);

console.log('Running in port 3000');