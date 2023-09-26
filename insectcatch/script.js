const screens = document.querySelectorAll('.screen');
const chooseInsectBtns = document.querySelectorAll('.choose-insect-btn');
const startBtn = document.getElementById('start-btn');
const gameContainer = document.getElementById('game-container');
const elTime = document.getElementById('time');
const elScore = document.getElementById('score');
const elMessage = document.getElementById('message');

let seconds = 0;
let score = 0;
let selectedInsect = {};

function createInsect(){
    const insect = document.createElement('div');
    const {x, y} = getRandomLocation();
    const rotation = Math.random() * 360;
    
    insect.classList.add('insect');
    insect.style.top = `${y}px`;
    insect.style.left = `${x}px`;

    insect.innerHTML = `<img src="${selectedInsect.src}" alt="${selectedInsect.alt}" style="transform: rotate(${rotation}deg)" />`
    insect.addEventListener('click', catchInsect);

    gameContainer.appendChild(insect);
}

function catchInsect(){
    increaseScore();
    this.classList.add('caught');
    setTimeout(() => {this.remove()}, 2000)
    addInsects();
}

function addInsects(){
    setTimeout(createInsect, 1000);
    setTimeout(createInsect, 1500);
}

function increaseScore(){
    score++;
    if(score > 19){
        message.classList.add('visible');
    }
    elScore.innerHTML = `Score: ${score}`;

}

function startGame(){
    setInterval(increaseTime, 1000);
}

function increaseTime(){
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    elTime.innerHTML = `Time: ${m}:${s}`;
    seconds++;
}

function getRandomLocation(){
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;

    return {x, y};

}

startBtn.addEventListener('click', () => screens[0].classList.add('up'));
chooseInsectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        selectedInsect = {src, alt};
        screens[1].classList.add('up');
        setTimeout(createInsect, 1000);
        startGame();
    })
})