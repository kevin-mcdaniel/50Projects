const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
const elButtons = document.querySelector('.buttons');
console.log(elButtons)
sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', ()=>{
        console.log('clicked');
        stopSounds();
        document.getElementById(sound).play();
    })
    elButtons.appendChild(btn);
})

function stopSounds(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}

