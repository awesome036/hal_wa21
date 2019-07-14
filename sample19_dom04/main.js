'use strict';

// $('input[name="align"]').on('change', function(e){
// 	$('#header1').css('textAlign', e.currentTarget.value);
// });

function setAlign(e) {
	let h1 = document.getElementById('header1');
	h1.style.textAlign = e.currentTarget.value;
}

let radios = document.getElementsByName('align');
for(let i = 0; i < radios.length; i++){
	radios[i].addEventListener('change', setAlign, false);
}