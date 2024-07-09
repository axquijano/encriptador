const reemplazo = (letra) => {
    switch (letra) {
        case "a":
            return "ai";
        case "e":
            return "enter";
        case "i":
            return "imes";
        case "o":
            return "ober";
        case "u":
            return "ufat";
        default:
            return letra;
    }
}

let textarea = document.querySelector("textarea");

let div_estado_inicial = document.querySelector("#inicial_encriptar");
let clase_estado_inicial = "inicial_encriptar";

let div_estado_final = document.querySelector("#final_encriptar");
let clase_estado_final = "final_encriptar";

let texto_encriptado = document.querySelector("#texto_encriptado");

let encriptar = () => {
    let valor = textarea.value;
    if (valor.trim() != "") {

        let letras = valor.split('');
        let encriptado = letras.map(elemt => reemplazo(elemt)).join('');
        console.log(encriptado);

        console.log("******");
        let claseInvisible = document.querySelector("#inicial_encriptar").classList.contains("hidden");
        div_estado_inicial.classList.remove(clase_estado_inicial);
        div_estado_inicial.classList.add("hidden");

        div_estado_final.classList.remove("hidden");
        div_estado_final.classList.add(clase_estado_final);


        texto_encriptado.textContent = encriptado;
    }
}

const desencriptar = () => {
    let valor = textarea.value;
    if(valor.trim() != ""){
        valor = valor.replaceAll('ai', 'a');
        valor = valor.replaceAll('enter', 'e');
        valor = valor.replaceAll('imes', 'i');
        valor = valor.replaceAll('ober', 'o');
        valor = valor.replaceAll('ufat', 'u');

        console.log(valor);

        div_estado_inicial.classList.remove(clase_estado_inicial);
        div_estado_inicial.classList.add("hidden");

        div_estado_final.classList.remove("hidden");
        div_estado_final.classList.add(clase_estado_final);

        texto_encriptado.textContent = valor;

    }
}

const copiarContenido = async () => {
    let texto = texto_encriptado.textContent;
    try {
        await navigator.clipboard.writeText(texto);
        console.log('Contenido copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
}


