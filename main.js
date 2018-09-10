//var helado = 'chocolate';

/*if (helado === 'chocolate'){
	alert('Si, amo el helado de chocolate!');
}
else{
	alert('Awwww, pero mi favorito es el chocolate...');
}*/

//FUNCIONES:
/*
function multiplica(num1, num2){
	var resultado = num1 * num2;

	return resultado;
}
*/
/*document.querySelector('html').onclick = function() {
    alert("Ouch! Deja de pincharme!");
}*/

/*document.querySelector('html').onclick = function(){
	alert("Ouch! Deja de pincharme!");
}*/

//FUNCION ANONIMA
/*
var miHTML = document.querySelector('html');
miHTML.onclick = function(){alert('Quedó pinchado');}
*/

// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/paella1.jpg') {
      myImage.setAttribute ('src','images/paella2.jpg');
	} else {
	  myImage.setAttribute ('src','images/paella3.jpg');
	}
}


//VARIABLES
var miButton = document.querySelector('button');
var miTitulo = document.querySelector('h1');

//FUNCIONES

function estableceNombreUsuario(){
	var miNombre = prompt('por Favor, ingresa nombre.');
	//localStorage.setItem('nombre', miNombre);
	miTitulo.textContent = 'Safari is ' + miNombre;
} 

//BLOQUE INICIALIZACION
/*
if(!localStorage.getItem('nombre')){
	estableceNombreUsuario();
}else{
	var nombreAlmacenado = localStorage.getItem('nombre');
	miTitulo.textContent = 'Safari is' + nombreAlmacenado;
}
*/
miButton.onclick = function() {
	estableceNombreUsuario();
}