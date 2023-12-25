const canvas_propiedades = document.getElementById('lienzo')
const canvas = canvas_propiedades.getContext('2d')

canvas_propiedades.width = window.innerWidth / 2;
canvas_propiedades.height = window.innerHeight / 2;
//Propiedad de lo que se vaya a pintar
canvas.fillStyle = 'red'
//Propiedades del tablero
canvas.strokeStyle = 'green'
canvas.lineWidth = 2
const COLUMNAS = 10;
const FILAS = 8;
const PX = 50;

for (let i = 0; i < COLUMNAS; i++) {
    for (let j = 0; j < FILAS; j++) {
        canvas.strokeRect(i*PX, j*PX, PX, PX);
    }
}
canvas.fillRect(250,250, PX, PX)
console.log(canvas);


