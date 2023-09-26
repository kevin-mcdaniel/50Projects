const btnOpen = document.querySelector('.open-btn');
const btnClose = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');

btnOpen.addEventListener('click', () => {
    nav.forEach(elNav => {
        elNav.classList.add('visible');
    })
})

btnClose.addEventListener('click', () => {
    nav.forEach(elNav => {
        elNav.classList.remove('visible');
    })
})