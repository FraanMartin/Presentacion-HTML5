const canvas_propiedades = document.getElementById('lienzo')
const canvas = canvas_propiedades.getContext('2d')

canvas_propiedades.width = window.innerWidth / 2;
canvas_propiedades.height = window.innerHeight / 2;

canvas.fillStyle = 'green'
canvas.strokeStyle = 'black'
canvas.lineWidth = 1


for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        canvas.strokeRect(i*50,j*50,50,50);
    }
}

//canvas.fillRect(250,250,50,50)


console.log(canvas);


