var crypto = require('crypto');

var pwd = 'test2pwojifij'
var shasum = crypto.createHash('sha256');
shasum.update(pwd);
var output = shasum.digest('hex');

console.log('password :' + pwd);
console.log('hash : ' + output);

var shasum2 = crypto.createHash('sha256');
shasum2.update('sdfj;awjie;');
var output2 = shasum2.digest('hex');
console.log('wrong hash:' + output2);

var secrete_key = '10eorktmaqhwl!'
var ciper = crypto.createCipher('aes192' , secrete_key);
ciper.update(pwd , 'utf8' , 'base64');
var cipherOutput = ciper.final('base64');

var decipher = crypto.createDecipher('aes192' , secrete_key);
decipher.update(cipherOutput , 'base64' , 'utf8');
var decipheredOutput = decipher.final('utf8');

console.log('ciphered pwd : ' + cipherOutput);
console.log('deciphered pwd :' + decipheredOutput);

 var fs = require('fs');
var data = {password:pwd , output:output , cipherOutput:cipherOutput}
 fs.writeFile('password.txt' , JSON.stringify(data) , 'utf8' , function(err){
    if (err){
    	console.log(err);
    }
    else {
    	console.log('write file completed');
    }


 } );

 fs.readFile('password.txt','utf8', function(err,data){
    if (err) {
    	console.log(err);
    }else{
    	console.log('data'+data);
    }


 });