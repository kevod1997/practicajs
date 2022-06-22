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

// let container = document.getElementById("contenedor");
// //ACA ESTAMOS AGREGANDO ETIQUETA HTML, CON EL ANTERIOR ESTABAMOS MODIFICANDOLA
// //cambiando el codigo html interno
// container.innerHTML = "<h2>Hola mundo </h2><p> Lorem ipsum</p>";

// //cambio del atributo class
// container.className = "container row";

//agregar o modificar elementos

let parrafo = document.createElement("p");

parrafo.innerHTML = "<h2>hola coder!</h2>";
//metodo append()
document.body.append(parrafo)

//eliminar elementos

//obtener datos mediante inputs
//planillas de texto!
//plantillas literales

//modificar valores de inputs

// document.getElementById("nombre").value = "Nombre";
// document.getElementById("edad").value = "39";

// ejemplo aplicado

let padre = document.getElementById("personas");

let personas = ["Homero", "Kev", "lisa", "Juan"];

for (const persona of personas) {
    // console.log(persona);
    let li = document.createElement("li");

    li.innerHTML = persona;

    padre.appendChild(li);

}

//appendChild
//agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado

//ejemplo con plantillas literales e innetHTML

let productos = [
    {id: 1, nombre: "arroz", precio: 125},
    {id: 2, nombre: "fideo", precio: 70},
    {id: 3, nombre: "pan", precio: 100},
    {id: 4, nombre: "harina", precio: 75},
]

for (const producto of productos) {
    
    let contenedor = document.createElement("div");

    contenedor.innerHTML = `<div class="container"
                                <h3>ID: ${producto.id} </h3>
                                <p> Producto: ${producto.nombre} <p/>
                                <b>$${producto.precio}</b>
                            </div>`
    document.body.appendChild(contenedor);                        
}

//query selector (metodo)
//query selector all