const elBox = document.getElementById('boxes');
const elButton = document.getElementById('btn');
const maxBoxes = 16;

function generateBox(boxIndex){
    const box = document.createElement('div');
    const xPos = (boxIndex % 4) * 125;
    const yPos = Math.floor(boxIndex / 4) * 125;

    box.classList.add('box');
    box.style.backgroundPosition = `-${xPos}px -${yPos}px`;
    elBox.appendChild(box);
}

for(let i = 0; i < maxBoxes; i++){
    generateBox(i);
}

elButton.addEventListener('click', ()=>{
    elBox.classList.toggle('big');
})

