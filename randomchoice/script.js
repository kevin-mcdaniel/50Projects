const elTextArea = document.getElementById('textarea');
const elTags = document.getElementById('tags');

elTextArea.focus();

elTextArea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomSelect();

    }
})

function randomSelect(){
    //number of times before it stops    
    const times = 30 

    const interval = setInterval(()=>{
        //pick a random tag to highlight, then remove the highlight after a set time
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
        
        setTimeout(()=>{
            removeHighlight(randomTag);
        }, 100);

    }, 100);

    setTimeout(()=>{
        //clear out the interval after running
        clearInterval(interval);
        //select the final tag
        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100)
    }, times * 100)
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag){
    tag.classList.add('highlight');
}

function removeHighlight(tag){
    tag.classList.remove('highlight');
}


function createTags(input){
    const tags = input.split(',')
        .filter(tag => tag.trim() !== '') //filter out whitespace
        .map(tag => tag.trim());

        elTags.innerHTML = '';
        tags.forEach(tag => {
            const elTag = document.createElement('span');
            elTag.classList.add('tag');
            elTag.innerText = tag;
            //TODO fix performance issue
            elTags.appendChild(elTag);
        })
}

