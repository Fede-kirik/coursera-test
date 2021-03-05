$(function (){
//questo fa la stessa cosa di 
//document.addEventListener("DOMContentLoaded")...
//tutto quello inserito in questa funzione $ viene 
//eseguito prima che tutto il contenuto (immagini ed extra) sia caricato 

	$("#navbarToggle").blur(function(event){
		var screenWidth = window.innerWidth;
		if(screenWidth < 768){
			$("#collapsable-nav").collapse("hide");
		}
	});
	//Questo equivale a 
	//document.querySelector("#navbarToggle").addEventListener("blur"...
	// la funzione dollaro funge anche da QUERY SELECTOR


//NB la funzione collapse viene da bootstrap
//  $("#navbarToggle").click(function (event) {
//    $(event.target).focus();
//  });
});