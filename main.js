

console.time('alpha');
//전역변수 출력
console.log('filename : ', __filename);
console.log('dirname : '+__dirname);

//console 전역 객체 사용 
console.log('숫자 : %d + %d = %d' , 273, 52, 273+52);
console.log('문자열 : %s', 'hello world%^&*&^%$#@' , '특수기호와 상관이 없음');
console.log('JSON : %j' , {name: 'KKK'});



var output = 1;
for (var i = 1;  i <= 10; i++) {
	output *= i;
}
console.log('Result : ' , output);

console.timeEnd('alpha');

console.log('\u001b[31m','shinhan bank');

console.log('\u001b[0m')

//process.argv
process.argv.forEach(function (item,index){

	//output 
	console.log(index + ' : ' + typeof (item) + ' : ',item);

	if (item == '--exit') {
		var exitTime = Number(process.argv[index+1]);

		setTimeout(function(){
			process.exit();
		},exitTime);
	}

});

console.log('-process.uptime : ' , process.uptime());
//console.log('-process.memory useage : ' , process.memoryUseage());


var module = require('./module.js');

console.log('abs(-273) = %d' , module.abs(-273));
console.log('circleArea(3) = %d' , module.circleArea(3));

var os = require('os');

console.log(os.hostname());
console.log(os.cpus());

var fs = require('fs');

var text = fs.readFileSync('textfile.txt' , 'utf8');
console.log(text);

fs.readFile('textfile.txt' , 'utf8' , function(error, data){
	console.log(data);

});

var writeData = '시나느냉'

fs.writeFile('TextFileWrite.txt' , writeData, 'utf8' , function(error){
	console.log('WRITE FILE ASYNC COMPLETE');
})

fs.writeFileSync('TextFileWriteSync.txt' , writeData+' 싱크', 'utf8' );
console.log('WRITE FILE SYNC COMPLETE');

