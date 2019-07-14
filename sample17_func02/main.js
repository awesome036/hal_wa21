var str1 = 'global';

function myfunc(){
	var str1 = 'local';
	console.log('関数内str1:' + str1);
}
myfunc();
console.log('関数外str1:' + str1);