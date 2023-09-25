const imgs = document.getElementById('imgs');
const btnLeft = document.getElementById('left');
const btnRight = document.getElementById('right');

const imgList = document.querySelectorAll('img');

let idx = 0;
let interval = setInterval(run, 2000);

function run() {
    idx++;
    changeImage();
}

function changeImage() {
    if(idx > imgList.length - 1){
        idx = 0;
    } else if(idx < 0) {
        idx = imgList.length - 1;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval(){
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

btnRight.addEventListener('click', () => {
    idx++;
    resetInterval();
    changeImage();
})

btnLeft.addEventListener('click', () => {
    idx--;
    resetInterval();
    changeImage();
})