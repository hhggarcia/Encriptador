const sustituciones = {
    "a" : "ai",
    "e" : "enter",
    "i" : "imes",
    "o" : "ober",
    "u" : "ufat",
}

const inversos = {
    "ai" : "a",
    "enter" : "e",
    "imes" : "i",
    "ober" : "o",
    "ufat" : "u",
}
function Encriptar_Texto(){
    console.log("Hola Mundo");
    let textoEncriptar = document.getElementById("texto");
    let mostrarTexto = document.getElementById("mostrarTexto");
    let contenedorTexto = document.getElementById("contenedor_texto");
    let contenedorSinTexto = document.getElementById("contenedor_sinTexto");
    let cadena = textoEncriptar.value;
    let resultado = Validar_Texto(cadena);

    console.log("Resultado validacion: "+resultado);

    if (resultado) {
        const reemplazar = (match) => sustituciones[match];
        const regex = /[aeiou]/gi;

        let nuevaCadena = cadena.replace(regex, reemplazar);

        contenedorSinTexto.style.display = "none";
        contenedorTexto.style.display = "flex";
        contenedorTexto.style.justifyContent = "center";
        contenedorTexto.style.alignItems = "center";
        contenedorTexto.style.flexDirection = "column";

        mostrarTexto.value = nuevaCadena;
        textoEncriptar.value = "";

    } else {
        alert("Ingresar solo minúsculas por favor!");
    }
}

function Desencriptar_Texto(){
    console.log("Hola Mundo");
    let textoDesencriptar = document.getElementById("texto");
    let mostrarTexto = document.getElementById("mostrarTexto");
    let contenedorTexto = document.getElementById("contenedor_texto");
    let contenedorSinTexto = document.getElementById("contenedor_sinTexto");
    let cadena = textoDesencriptar.value;
    let resultado = Validar_Texto(cadena);

    console.log("Resultado validacion: "+resultado);

    if (resultado) {
        const reemplazar = (match) => inversos[match];
        const regex = new RegExp(Object.keys(inversos).join('|'), 'gi');

        let nuevaCadena = cadena.replace(regex, reemplazar);

        contenedorSinTexto.style.display = "none";
        contenedorTexto.style.display = "flex";
        contenedorTexto.style.justifyContent = "center";
        contenedorTexto.style.alignItems = "center";
        contenedorTexto.style.flexDirection = "column";

        mostrarTexto.value = nuevaCadena;
        textoDesencriptar.value = "";

    } else {
        alert("Ingresar solo minúsculas por favor!");
    }
}

function Validar_Texto(cadena){
    const regex = /^[a-z]+$/

    return regex.test(cadena);
}

function copiarTexto(){
    try {
        const textarea = document.getElementById('mostrarTexto');
        const tempElement = document.createElement('textarea');
        let contenedorTexto = document.getElementById("contenedor_texto");
        let contenedorSinTexto = document.getElementById("contenedor_sinTexto");

        tempElement.value = textarea.value;
        document.body.appendChild(tempElement);

        tempElement.select();
        tempElement.setSelectionRange(0, 99999); 

        document.execCommand('copy');

        // Eliminar el elemento temporal
        document.body.removeChild(tempElement);

        textarea.value = "";

        alert("Texto copiado correctamente!");

        contenedorTexto.style.display = "none";
        contenedorSinTexto.style.display = "flex";
        
    } catch (error) {
        alert("Ha ocurrido un error :(")
    }  
}