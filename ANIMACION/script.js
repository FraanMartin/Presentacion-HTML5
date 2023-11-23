const canvasId = document.getElementById('lienzo')
const canvas = canvasId.getContext('2d')

canvasId.width = window.innerWidth
canvasId.height = window.innerHeight

//propiedades
const ancho = window.innerWidth
const alto =  window.innerHeight
//pos inicial, donde 75 es igual al tamaño del cuadrado / 2
const iniX = (ancho / 2) - 75
const iniY = (alto / 2) - 75
//pos del dibujo dentro de la animacion y grados de desplazamiento
const posX = 200
const posY =  50
const grados = 5 * (Math.PI / 180)

//crea un cuadrado inicial
canvas.lineWidth = 2
canvas.strokeStyle = '#44FF44' //verde matrix */
canvas.strokeRect(iniX, iniY, 150, 150)
//funcion que devuelve un valor rgb entre 0 y 255
const aleatorio = () => Math.ceil(Math.random() * 256)


let i = 0;
function girar (){
    canvas.rotate(grados)
    if (i == 175){
        let rgb1 = aleatorio()
        let rgb2 = aleatorio()
        let rgb3 = aleatorio()
        canvas.strokeStyle = `rgb(${rgb1},${rgb2},${rgb3})`
        i = 0;
    }
    canvas.strokeRect(-posX/2, -posY/2, 270, 270)
    window.requestAnimationFrame(girar)
    i++;
}

canvasId.addEventListener('click', dibujar)

function dibujar () {
    canvas.clearRect(0, 0, ancho, alto) //borra todo lo que haya dibujado en el canvas
    canvas.translate(ancho / 2, alto / 2) //situa el comienzo del trazo en la mitad de la pantalla
    girar()
    canvasId.removeEventListener('click',dibujar) //elimina el evento 'click'
}





