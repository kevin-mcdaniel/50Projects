const elBoxes = document.querySelectorAll('.box');
//do this using intersection observer. This is terrible for performance
window.addEventListener('scroll', checkBoxes)
checkBoxes();
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
    elBoxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show');
        }
    })
}

for(box of elBoxes){

}