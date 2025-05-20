var h = require("http");
var u = require("url");
var fs = require("fs");
var server = h.createServer(function (req, res) {
    var parts = u.parse(req.headers.host+req.url,true)
    var pathname =parts.pathname;
    var fname = pathname.substring(1);

    fs.readFile(fname,function(err,data){
        if(!err)
        {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(data.toString());
            res.end();
        }
        else{
            res.writeHead(404,{'content-type':'text/html'});
            res.write("<p> Resourse not found </p>");
        }
    })
});

server.listen(7000, function () {
    console.log("Server started at 7000");
});