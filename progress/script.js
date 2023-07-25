const elProgress=document.getElementById('progress');
const elPrev=document.getElementById('prev');
const elNext=document.getElementById('next');
const elCircles=document.querySelectorAll('.circle');

let currentActive = 1;

elNext.addEventListener('click', ()=>{
    if(currentActive < elCircles.length){
        currentActive++;
    }
    updateProgress();
})

elPrev.addEventListener('click', ()=>{
    if(currentActive > 1){
        currentActive--
    }
    updateProgress();
})

function updateProgress(){
    
    elCircles.forEach((circle, index)=>{
        if(index < currentActive){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');
    //back it off a little bit to accommodate for the 
    const progressWidth = (actives.length - 1) / (elCircles.length-1) * 100;
    elProgress.style.width=`${progressWidth}%`;
    if(currentActive === 1){
        elPrev.disabled = true;
    } else if (currentActive === elCircles.length){
        elNext.disabled = true;
    } else {
        elPrev.disabled = false;
        elNext.disabled = false;
    }

}