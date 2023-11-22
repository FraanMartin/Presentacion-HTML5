const canvas_props = document.getElementById('lienzo');
canvas_props.width = window.innerWidth / 2;
canvas_props.height = window.innerHeight;
const canvas = canvas_props.getContext('2d');


//Un ángulo de 360° equivale a 2*PI radianes
const grados360 = Math.PI * 2
//coordenadas que señalan desde donde empieza a dibujarse el circulo
const ejeX = 420;
const ejeY = 420;
//tamaño del circulo
let size = 150

canvas.beginPath();
canvas.fillStyle = 'red'
canvas.strokeStyle = 'black'
canvas.lineWidth = 3
//dibuja un circulo completo
canvas.arc(ejeX, ejeY, size, 0, grados360)
canvas.fill()
canvas.stroke()

//sobreescribe la mitad inferior
canvas.beginPath();
canvas.fillStyle = 'white'
canvas.arc(ejeX, ejeY, size, 0, Math.PI)
canvas.fill()
canvas.stroke()

//dibuja la línea negra central
canvas.beginPath()
canvas.lineWidth = 5
//empieza en el punto 0 - el total del radio
canvas.moveTo(ejeX - size, ejeY); 
canvas.lineTo(ejeX + size, ejeY); 
canvas.stroke()


//dibuja el circulo interior
canvas.beginPath()
canvas.arc(ejeX, ejeY, size / 4, 0, grados360)
canvas.fill()
canvas.stroke()
canvas.closePath();

