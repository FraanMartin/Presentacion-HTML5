const canvasID = document.getElementById('lienzo');
const canvas = canvasID.getContext('2d');
const img = document.getElementById('imagen');
canvasID.width = innerWidth / 4;
canvasID.height = innerHeight / 2;

canvas.drawImage(img, 0 ,0 , img.width/4 ,img.width/4)
let array = canvas.getImageData(0,0,innerWidth / 4, innerHeight / 2).data

console.log(array);
