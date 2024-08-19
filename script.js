const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptar){
    let matrizCodigo = [
        ["e","enter"],
        ["i","imes"],
        ["a","ai"],
        ["o","ober"],
        ["u","ufat"]
    ];

    stringEncriptar = stringEncriptar.toLowerCase();

    for(let i  = 0; i < matrizCodigo.length; i++){

        if(stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }

    return stringEncriptar
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptar){
    let matrizCodigo = [
        ["e","enter"],
        ["i","imes"],
        ["a","ai"],
        ["o","ober"],
        ["u","ufat"]
    ];

    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i  = 0; i < matrizCodigo.length; i++){

        if(stringDesencriptar.includes(matrizCodigo[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }

    return stringDesencriptar
}

// Selecciona el textArea y añade un event listener para cada vez que cambie su valor
textArea.addEventListener('input', validarTexto);

function validarTexto() {
    let textoIngresado = textArea.value;

    // Reemplaza caracteres no permitidos (todo lo que no sean letras minúsculas sin acentos)
    let textoValidado = textoIngresado.replace(/[^a-z\s]/g, '');

    // Si el texto ingresado y el texto validado son diferentes, actualiza el textArea
    if (textoIngresado !== textoValidado) {
        textArea.value = textoValidado;
        alert("Solo se permiten letras minúsculas sin acentos.");
    }
}

async function copyContent() {
    const texto = document.querySelector(".mensaje");
    try {
      await navigator.clipboard.writeText(texto.value);
      console.log('Content copied to clipboard');
      /* Resolved - text copied to clipboard successfully */
    } catch (err) {
      console.error('Failed to copy: ', err);
      /* Rejected - text failed to copy to the clipboard */
    }
  }