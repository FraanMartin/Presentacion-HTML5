
const canvasData = document.getElementById('canvas1');
const canvas = canvasData.getContext('2d');

canvasData.width = window.innerWidth;
canvasData.height = window.innerHeight;
console.log(canvas);

class Particulas {
    constructor(effect, posOriginalX, posOriginalY, color) {
        this.efecto = effect;
        this.posOriginalX = posOriginalX;
        this.posOriginalY = posOriginalY;
        this.color = color;

        this.posX = Math.floor(posOriginalX);
        this.posY = Math.floor(posOriginalY); //de esta forma las particulas empiezan en la posicion de la imagen
        
        this.velX = Math.random() * 3 - 1;
        this.velY = Math.random() * 3 - 1;

    }
    dibujar(canvas) {
        canvas.fillStyle = this.color;
        canvas.fillRect(this.posX, this.posY, this.efecto.size, this.efecto.size);
    }
    desplazar() {
        this.posX += this.velX;
        this.posY += this.velY;

        if (this.posX < 0 || this.posX >= canvasData.width){
       
        }
        if (this.posY < 0 || this.posY >= canvasData.height){
        
        }
    };
}
/*
La clase efecto recibe por parametro la altura y anchura de la ventana, el tamanio del efecto a crear
y la ID de la imagen a modificar. 

Para asegurarse de que 'this' se refiera a la instancia de Efecto, se utiliza bind(this) o funciones flecha. 
Esto deja 'this' vinculado a la instancia/objeto de Efecto. 

En otras palabras, cuando se llama a this.animar() dentro de window.requestAnimationFrame, 
se asegura de que this se refiere al objeto Efecto en lugar del contexto de window.requestAnimationFrame.
*/
class Efecto {
    constructor(canvas, width, height, size, imagen) {
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this.size = size;
        this.img = document.getElementById(imagen);
        this.imgX = this.width / 2 - this.img.width / 2;
        this.imgY = this.height / 2 - this.img.height / 2;
        this.particulasArray = [];
        this.res = 3;
    }

    getMaxWidth(){
        
    }
    crear() {
        this.canvas.drawImage(this.img, this.imgX, this.imgY);
        const imgData = this.canvas.getImageData(0, 0, this.width, this.height).data; //podria ser 0,0,imgW,imgH para todo el canvas
        
        for (let i = 0; i < this.height; i += this.res) {
            for (let j = 0; j < this.width; j += this.res) {
        
                let index = (i * this.width + j) * 4;
                let rojo = imgData[index];
                let verde = imgData[index + 1];
                let azul = imgData[index + 2];
                let opacidad = imgData[index + 3];
        
                if (opacidad > 0) {
                    let color = `rgb(${rojo},${verde},${azul})`;
                    this.particulasArray.push(new Particulas(this, j, i, color)); //j == width del pixel actual, i == altura del pixel actual
                }

            }
        }
    }
    pintar() {
        this.particulasArray.forEach((particula) => particula.dibujar(this.canvas));
    }
    actualizar() {
        this.particulasArray.forEach((particula) => particula.desplazar());
    }


    /* Una manera de conservar el contexto de forma automatica, es convertir 
    la funcion de clase en una funcion flecha '=>' (mantienen el valor de this del ámbito en el que fueron creadas) */
    animar = () => {
        this.canvas.clearRect(0, 0, this.width, this.height);
        this.pintar();
        this.actualizar();
        window.requestAnimationFrame(this.animar);
        
    };



}




window.addEventListener('load', function () {
    const miEfecto = new Efecto(canvas, canvasData.width, canvasData.height, 10, "imagen");
    const btn = document.getElementById('boton');
    /* console.log(miEfecto); */
     miEfecto.crear();
     btn.addEventListener('click', () => miEfecto.animar())
})

