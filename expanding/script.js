const elPanels = document.querySelectorAll('.panel');

elPanels.forEach(panel => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses(){
    elPanels.forEach(panel =>{
        panel.classList.remove('active');
    });
}