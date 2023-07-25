const elContainer = document.querySelector('.container');
const elOpen = document.getElementById('open');
const elClose = document.getElementById('close');

elOpen.addEventListener('click', () => {
    elContainer.classList.add('show-nav');
});

elClose.addEventListener('click', () => {
    elContainer.classList.remove('show-nav');
})