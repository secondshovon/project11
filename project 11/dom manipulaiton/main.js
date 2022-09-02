// ###### EVENT #####

// var btn=document.getElementById('btn');
// btn.style.padding='12px 16px';
// btn.style.border='none';
// btn.style.backgroundColor='#006837';
// btn.style.color='#fff';

// var h=document.getElementsByTagName('h1');
// h[0].style.color='tomato';

// var p=document.getElementsByClassName('text');
// p[0].style.textDecoration='underline';
// var sp=document.querySelector('span');
// sp.innerHTML='<h1>hello</h1>';
// custom inner html likhar process; 
// sp.innerHTML=p[0].innerHTML;
// inner html likhle full html element soho asbe
// inner text likhle vitorer textgulo asbe html element <br> asbena


// #####  function er maddhome call korar khetre 

// function clicknow(){
// 	btn.innerHTML='Downloading...';
// }
// btn.addEventListener('click',function(){
// 	document.getElementsByClassName('bg')[0].style.backgroundColor='red';
// });
// this is the proper way to call function 


// ##### INCREMENT-DECREMENT #####

var res= document.getElementById('value');
var warningText= document.getElementById('warning');
var btn= document.querySelectorAll('button');


res.style.fontsize="80px";
res.style.fontWeight="500";
res.style.marginBottom="32px";

btn[0].addEventListener('click',function(){

	res.style.color='black';

	// this.innerHTML='clicked';
	res.innerText=parseInt(res.innerText)+1;
	
	// integer e conver korar jonno parseInt dite hoy

	var val= parseInt(res.innerText);
	if(val >= 20){
		alert('value reach the maximum number');
		res.innerText='20';
		res.style.color='red'

	}


});

btn[1].addEventListener('click',function(){

	res.style.color='black';

	res.innerText=parseInt(res.innerText)-1;

	var val= parseInt(res.innerText);

	if(val <= 0){
		alert('value reach the minimum number');
		res.innerText='0';
		res.style.color='red';

	}
	
});


// ##### MODAL #####

 // var b=document.getElementsByClassName('b');
     
 //      b[0].addEventListener('click',function(){

 //        document.getElementsByClassName('c-modal')[0].style.display='block';
 //      });




