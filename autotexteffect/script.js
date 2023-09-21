const elText = document.getElementById('text');
const elSpeed = document.getElementById('speed');
const text = 'I do web stuff...';

let idx = 1;
let speed = 300 / elSpeed.value;

writeText(true);

function writeText(repeat){
    elText.innerText = text.slice(0, idx);
    idx++;


    const textTimeout = setTimeout(()=>{
        writeText(repeat);
    }, speed)
    
    if(repeat){
        if(idx > text.length){
            idx = 1
        }    
    } else {
        if(idx > text.length){
            clearTimeout(textTimeout)
        }
    }
    
}

elSpeed.addEventListener('input', e => speed = 300 / e.target.value);