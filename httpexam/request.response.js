var http = require('http');
var fs = require('fs');
var ejs = require('ejs');
var jade = require('jade');

http.createServer(function(req, res){
    //
    if (req.method == 'GET') {
        console.log(req.url+'get');
        
        if(req.url == '/'){
        	fs.readFile('index.html', function(err,data){

            if(!err){
            	res.writeHead(200,{'Content-Type':'text/html'});
            	res.end(data);
            } else{
            	res.writeHead(404);
            	res.end();
            }

         });

        }else if (req.url == '/ejs'){

             fs.readFile('templete.ejs' , 'utf8' , function(err,data){
             	if(!err){
             		var html = ejs.render(data,{name:'hdkjls' , description:'hello world form EJS'});
             		res.writeHead(200, {'Content-Type' : "text/html"});
             		res.end(html);
             	}
             });


        } else if (req.url =='/jade'){
            fs.readFile ('templete.jade' , 'utf8',function(error,data){
            	var fn = jade.compile(data);

            	res.writeHead(200 , {'Content-Type' : 'text/html'});
            	res.end(fn({
            		name: 'rintiantta', descripion: 'Hello jade with node js'
            	}));
            });




        }

    }else if (req.method == 'POST') {

        console.log(req.url+'POST');
        req.on('data', function(data){
        	res.writeHead(200,{'Content-Type' : 'text/html'});
        	res.end(data);
        });

    }
}).listen(52273, function(){

	console.log('Server running');

});