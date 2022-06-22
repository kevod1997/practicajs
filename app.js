// modelo de objeto del documento DOM
//cada etiqueta html es un objeto, al que podemos llamar NODO 

// let div = document.getElementById("app");
// let parrafo = document.getElementById("parrafo1");
// console.log(div.innerHTML);
// console.log(parrafo1.innerHTML);

// let paises = document.getElementsByClassName("paises");
// console.log(paises[0].innerHTML);
// console.log(paises[1].innerHTML);
// console.log(paises[2].innerHTML);

// let contenedores = document.getElementsByTagName("div");
// console.log(contenedores[0].innerHTML);
// console.log(contenedores[1].innerHTML);
// console.log(contenedores[2].innerHTML);
// console.log(contenedores[3].innerHTML);

// let paises = document.getElementsByClassName("paises");
// //UNA FORMA DE PODER RECORRER ES CON UN FOR OF!
// for (const pais of paises) {
//     console.log(pais.innerHTML);
// }

//innerText, con esto vamos a poder modificar el contenido de un nodo de tipo texto

// let titulo = document.getElementById("parrafo1");

 // console.log(titulo.innerText);

// const nombreUsuario = prompt("Bienvenido, ingrese su nombre:");

// titulo.innerText = "Hola " + nombreUsuario+ "!";

// --------

let container = document.getElementById("contenedor");
//ACA ESTAMOS AGREGANDO ETIQUETA HTML, CON EL ANTERIOR ESTABAMOS MODIFICANDOLA
//cambiando el codigo html interno
container.innerHTML = "<h2>Hola mundo </h2><p> Lorem ipsum</p>";

//cambio del atributo class
container.className = "container row";

