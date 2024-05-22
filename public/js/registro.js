import Nube from './nube/Nube.js'

let btn_enviar, btn_cerrar_modal, formulario, ventana;
let correo,clave,nombre,celular, usuario,imagen, titulo,mensaje;
let nube;

window.onload = iniciarRegistro()

function iniciarRegistro(){
	btn_enviar = document.getElementById("btn_enviar");
	btn_cerrar_modal = document.getElementById("btn_cerrar_modal");
	correo = document.getElementById("correo");
	nombre = document.getElementById("nombre");
	celular = document.getElementById("celular");
	clave = document.getElementById("clave");
	ventana = document.getElementById("ventana");

	mensaje = document.querySelector("#ventana p");
	titulo = document.querySelector("#ventana h1");
	imagen = document.querySelector("#ventana span");

	formulario = document.getElementById("formulario");
	formulario.addEventListener("submit",procesarRegistro);
	nube = new Nube();
}

async function procesarRegistro(evento){

	evento.preventDefault();
	const response = await nube.register(correo.value, clave.value);
	if (!response.error) {
		alert("Usuario registrado con éxito");
		location.href = "index.html";
	}
	else {
		alert("Usuario no ser registrado");
		console.error(response.msg);
	}
	evento.preventDefault();

	//console.log(evento.target);

}