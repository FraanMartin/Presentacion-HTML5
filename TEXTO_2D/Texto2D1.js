const input = document.getElementById('inputText');
const canvas = document.querySelector('canvas');
const dibujo = canvas.getContext('2d');

canvas.width = window.innerWidth; //propiedad de la propia etiqueta <canvas>
canvas.height = window.innerHeight; //propiedad de la propia etiqueta <canvas>

//:::::::::::::PROPIEDADES DEL TEXTO :::::::::::::::::
dibujo.font = "150px Arial";
dibujo.textAlign = "center";
dibujo.shadowBlur = 10;
dibujo.shadowColor = "black";
dibujo.shadowOffsetY = 12;
dibujo.lineWidth = 3; //grosor 
dibujo.strokeStyle = "black"; //color del borde
dibujo.fillStyle = "#0000"; //color del dibujo
dibujo.letterSpacing = "18px";


//:::::::::::::CAPTURADOR DE EVENTOS:::::::::::::::::
window.addEventListener('load', function () {
    input.addEventListener('input', function (input) {
        dibujo.clearRect(0, 0, canvas.width, canvas.height); //limpia el el elemento cada vez que se haga un input
        nextLine(input.target.value); // cada letra del input
    });
});



/* 
Los 2 while permiten delimitar los limites de la pantalla para evitar el overflow.
El while externo comprueba que sigan existiendo caracteres y mantiene o finaliza el bucle.
El while interno separa los caracteres según el ancho maximo de la pantalla.
El String 'palabras' va acumulando los caracteres introducidos por el <input>

Cuando el String 'palabras' sea mayor que el ancho, el programa sale del bucle while interno y 
guarda el String en el array frases[]. Divididos los caracteres, se organiza su altura:
    - Si existe una unica linea, se escribira en el centro de la ventana
    - Si existe más de una linea, se empezara a dibujar desde el punto mas alto
*/


function nextLine(text) {
    let altura = 150;
    let maxWidth = window.innerWidth - (window.innerWidth * 0.25); //1125 o Ancho maximo
    let ejeX = canvas.width / 2;
    let ejeY = canvas.height / 2;
    let palabras = "";
    let frases = [];
    let numLineas = 0;
    let i = 0;

    while (i < text.length) {
        while (dibujo.measureText(palabras).width < maxWidth && i < text.length) {
            palabras += text[i];
            i++;
        }
        frases[numLineas] = palabras;
        palabras = "";
        numLineas++;
    }

    if (numLineas === 1) {
        frases.forEach((frase) => dibujo.strokeText(frase, ejeX, ejeY));
    } else
        //forEach permite declarar un indice de forma explicita que determina la altura de la frase
        frases.forEach(
            (frase, indice) => dibujo.strokeText(frase, ejeX, ejeY / 2 + indice * altura));
    
} 

console.log(dibujo);

 
