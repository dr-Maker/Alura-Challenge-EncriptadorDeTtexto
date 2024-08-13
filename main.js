
var diccionario = [
        {
            id : 1,
            decifrado : "a",
            cifrado : "ai",
        },
        {
            id : 2,
            decifrado : "e",
            cifrado : "enter",
        },
        {
            id : 3,
            decifrado : "i",
            cifrado : "imes",
        },
        {
            id : 4,
            decifrado : "o",
            cifrado : "ober",
        },
        {
            id : 5,
            decifrado : "u",
            cifrado : "ufat",
        }
    ]



function Encriptar(){
    var textoIngresado = document.getElementById('text').value;
    var largoTexto =textoIngresado.length;   
    var contador = 0;
    var TextoEncriptado ='';

        while(contador < largoTexto)
        {  
            var letraActual = textoIngresado[contador];      
            var item = diccionario.find(item => item.decifrado === letraActual);
            if (item) {
                TextoEncriptado += item.cifrado;
            } else {
                TextoEncriptado += letraActual;
            }
            contador++;
        }
        console.log(TextoEncriptado);  
}


function Desencriptar(){
    var textoIngresado = document.getElementById('text').value;   

    diccionario.forEach(item => {
        textoIngresado = textoIngresado.replaceAll(item.cifrado, item.decifrado);
    });
    console.log(textoIngresado);
}
