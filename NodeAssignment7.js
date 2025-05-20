const http = require('http');
const url = require('url');
const fs = require('fs');
http.createServer((req, res) => {
    var data=fs.readFileSync('data.txt');
    s=parseInt(data.toString());
    s++;
    console.log(s);
    fs.writeFileSync('data.txt',s+"");
    res.end();
}).listen(9000, () => {
    console.log('Server is running on 9000');
});