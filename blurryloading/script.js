const elLoadingText = document.querySelector('.loading-text')
const elBgImage = document.querySelector('.bg');

let intLoad = 0;
let int = setInterval(blurring, 30);

function blurring(){
    intLoad++;
    
    if(intLoad > 99){
        clearInterval(int);
    }
    elLoadingText.innerText = `${intLoad}%`
    //fade out the number as you arrive a 100
    elLoadingText.style.opacity = scale(intLoad, 0, 100, 1, 0);
    elBgImage.style.filter = `blur(${scale(intLoad, 0, 100, 30, 0)}px)`
    console.log(intLoad);
}

//opacity goes from 1 to 0 while percentage goes from 0 to 1, so function to translate between the two values
//same with blur, we want it to go from 30px to 0
//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

