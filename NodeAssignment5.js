var h = require("http");
var u = require("url");
var server = h.createServer(function (req, res) {
    var obj_url = u.parse(req.url, true);
    var nm = obj_url.query.name;
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write("<h1>Welcome to Node JS, " + nm + "!</h1>"); 
    res.end();
});

server.listen(8000, function () {
    console.log("Server started at 8000");
});