var express=require('express');
var fs=require("fs");
var body_parser=require('body-parser');
var path=require('url');
var app = exports.app = express();
var natural=require('natural');
var enableCORS = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
};

//app.use(express.static(path.join(__dirname, 'public')));
app.use("/script", express.static(__dirname + '/public/script'));

app.get('/',function(req,res){
console.log('hi');

fs.readFile('./oauth1.html', function (err, html) {
    if (err) {
        throw err; 
    }         
        res.writeHead(200, { 'Content-Type': "text/html" });
        res.write(html);
		res.end();
    });});
app.post('/post',function(req,res){
   var data=req.body.str;
   console.log(str); 
   res.send(str);
});
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080  
, ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

var server = app.listen(port,ip,
    function() {
        console.log('Listening on port %d',server.address().port);
    }
);

