
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

        RemoverEtiquetas();
        AgregarEtiquetas(TextoEncriptado);
        VaciaInput();        
        //console.log(TextoEncriptado);  
}

function Desencriptar(){
    var textoIngresado = document.getElementById('text').value;   

    diccionario.forEach(item => {
        textoIngresado = textoIngresado.replaceAll(item.cifrado, item.decifrado);
    });
    RemoverEtiquetas();
    AgregarEtiquetas(textoIngresado);
    VaciaInput();
    //console.log(textoIngresado);
}

function RemoverEtiquetas(){
    const Aside = document.getElementById('contenido__contenedorAside');
    Aside.querySelectorAll('*').forEach(n => n.remove());

}

function AgregarEtiquetas(mensajeCifrado){
    var divElement = document.createElement("div"); 
    divElement.classList.add("contenido__contenedorAside__contendorTexto");
    
    var pElement = document.createElement("p");
    pElement.classList.add("contenido__contenedorAside__TextoFuncion");
    pElement.textContent =mensajeCifrado;

    const Aside = document.getElementById('contenido__contenedorAside');
    divElement.appendChild(pElement);
    Aside.appendChild(divElement)

    var divBtn = document.createElement("div");
    divBtn.classList.add("contenido__contenedorAside__contendorBtnCopiar");

    var button = document.createElement("button");
    button.classList.add("contenido__contenedorAside__BtnCopiar");

    button.onclick = function() {
        navigator.clipboard.writeText(pElement.textContent);
    };

    button.textContent = "Copiar";
    divBtn.appendChild(button)
    Aside.appendChild(divBtn)
}

function VaciaInput(){
     document.getElementById('text').value ="";
}

const textArea  = document.getElementById('text');
textArea.addEventListener("input", e =>{
    textArea.style.height = textArea.scrollHeight + 'px';
});