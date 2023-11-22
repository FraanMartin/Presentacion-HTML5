const ref_canvas = document.getElementById('lienzo')
const canvas = ref_canvas.getContext('2d')

ref_canvas.width = window.innerWidth
ref_canvas.height = window.innerHeight

//propiedades del texto
canvas.strokeStyle = 'black'
canvas.fillStyle = 'red'
canvas.font = '150px Arial'
canvas.lineWidth = 5
//posicion
const pos = innerHeight / 2

canvas.fillText("Hello", pos, pos)
canvas.fillStyle = 'green'
canvas.fillText("World", pos + 385, pos)
canvas.strokeText("Hello World", pos, pos)