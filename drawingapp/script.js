//use the canvas api
//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

const canvas = document.getElementById('canvas');
const btnIncrease = document.getElementById('increase');
const btnDecrease = document.getElementById('decrease');
const elSize = document.getElementById('size');
const elColor = document.getElementById('color');
const elClear = document.getElementById('clear');
const ctx = canvas.getContext('2d');
let size = 10;
let isPressed = false;
let color = 'black';
let x;
let y;


function updateSizeOnScreen(){
    elSize.innerText = size;
}

function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, true); // Outer circle
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2){
    //x1 start point 
    //x2 end point

    ctx.beginPath();
    //set the start point
    ctx.moveTo(x1, y1);
    //set the end point
    ctx.lineTo(x2, y2);
    
    //set color and size
    ctx.strokeStyle = color;
    //circle is radius so you need to multiply by 2
    ctx.lineWidth = size * 2; 
    
    //create the line
    ctx.stroke();
}

//drawCircle(100, 200)
//drawLine(300, 300, 300, 500)

updateSizeOnScreen();


elColor.addEventListener('change', (e) => {
    color = e.target.value;
});

btnIncrease.addEventListener('click', () => {
    size += 5;
    if(size > 50){
        size = 50;
    } 

    updateSizeOnScreen();
});

btnDecrease.addEventListener('click', () => {
    size -= 5;
    if (size < 5) {
        size = 5;
    }

    updateSizeOnScreen();
});


elClear.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));

canvas.addEventListener('mousedown', (e)=>{
    isPressed=true;
    
    //get coordinates of mouse
    x = e.offsetX;
    y = e.offsetY;

});

canvas.addEventListener('mouseup', (e)=>{
    isPressed=false;
    
    //get coordinates of mouse
    x = undefined;
    y = undefined;
    
});

canvas.addEventListener('mousemove', (e)=>{
    if(isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2)
        //prevent gaps if moving quickly
        drawLine (x, y, x2, y2);

        //set the x value to whatever the x2 value was
        x = x2;
        y = y2;
    }
    
});