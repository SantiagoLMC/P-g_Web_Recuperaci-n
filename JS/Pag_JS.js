 function ValidarForm_ORIG(){
	 
		if(document.formul.nombre.value == false && document.formul.apellido1.value == false && document.formul.apellido2.value == false && document.formul.email.value == false){
			alert("Es necesario rellenar esos datos.");
			return false;
	}
		if(document.formul.consul.checked == false && document.formul.desa.checked == false && document.formul.realiz.checked == false && document.formul.Otros.checked == false){
			alert("Es necesario seleccionar un tipo de comic.");
			return false;
	}
	/*	if(document.formul.List.value == false){
			alert("Debe elegir una cantidad.");
			return false;
	}
		if(document.formul.email.length){
		alert("Correo no válido.");
	}
		/*if(document.formul.){
			
		}*/
	else{
		alert("Su pedido se ha realizado correctamente.");
	}
}	

function ValidarForm(){
	 
	 if(document.formul.nombre.value == ""){
			alert("Es necesario rellenar Nombre.");
			
	}
	if(document.formul.apellido1.value == ""){
			alert("Es necesario rellenar Apellido 1.");
			
	}
	if(document.formul.apellido2.value == ""){
			alert("Es necesario rellenar Apellido 2.");
			
	}
	if(document.formul.mail.value == ""){
			alert("Es necesario rellenar Email.");
			
	}
	
	 	if(document.formul.nombre.value == "" && document.formul.apellido1.value == "" && document.formul.apellido2.value == "" && document.formul.mail.value == ""){
			alert("Es necesario rellenar esos datos.");
			return false;
	}
		if(document.formul.consul.checked == false && document.formul.desa.checked == false && document.formul.realiz.checked == false && document.formul.Otros.checked == false){
			alert("Es necesario seleccionar un tipo de comic.");
			return false;
	}
	/*	if(document.formul.List.value == false){
			alert("Debe elegir una cantidad.");
			return false;
	}
		if(document.formul.email.length){
		alert("Correo no válido.");
	}
		/*if(document.formul.){
			
		}*/
	else{
		alert("Su pedido se ha realizado correctamente.");
	}
}

function uno(){
	document.getElementById("carru").src = "IMG/monitor2.png";
	setTimeout(function(){dos();},3000);
}
function dos(){
	document.getElementById("carru").src = "IMG/PCA.png";
	setTimeout(function(){tres();},3000);
}
function tres(){
	document.getElementById("carru").src = "IMG/MouseA.png";
	setTimeout(function(){uno();},3000);
}

function cuatro(){
	document.getElementById("carruA").src = "IMG/Mouse.png";
	setTimeout(function(){dos();},3000);
}
function cinco(){
	document.getElementById("carruA").src = "IMG/Amonitor2.png";
	setTimeout(function(){tres();},3000);
}
function seis(){
	document.getElementById("carruA").src = "IMG/PCA.png";
	setTimeout(function(){uno();},3000);
}

