var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+'/public'));

app.get('/' , function (req , res) {
	if(req.cookies.auth){
        res.send('<h1>login succeess</h1>'+
        	'<form method = "POST" action = "/logout">'+
        	'<input type = "submit" value = "logout">'+
        	'</form>'
        	);

	}else{
		res.redirect('/login');
	}
});

app.get('/login' , function (req , res) {
	fs.readFile(__dirname+'/public/login.html',
		function(err,data) {

			if(err){
				res.send(JSON.stringify(err));

			}else{
				res.send(data.toString());
			}
			// body...
		});
});

app.post('/login' , function (req , res) {
	// body...
	var username = req.body.username;
	var password = req.body.password;
	if(username == 'hong' && password == '1234'){
		res.cookie('auth', true);
		res.redirect('/');
	} else {
		res.redirect('/login');
	}
});

app.post('/logout' , function (req , res) {
	// body...

	if(req.cookies.auth){
        res.clearCookie('auth');
        res.redirect('/');
	}else
	{
		res.redirect('/');
	}
});

app.get('/a' , function(req,res){
    res.send("<a href='/b'>GoToB</a>");
});

app.get('/b' , function(req,res){
    res.send("<a href='/a'>GoToA</a>");
});

app.get('/page/:id' , function(req,res){
    
	var id = req.params.id;
	res.send('<h1>' +id+ 'Hello ,Express2</h1>');


});

app.get('/image' , function(req,res){
    
	res.writeHead(200,{'Content-Type' : 'text/html'});
	res.end();


});


app.listen(52273,function(){
    console.log("Server is running");


});