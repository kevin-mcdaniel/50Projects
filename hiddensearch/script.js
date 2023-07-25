const elSearch = document.querySelector('.search')
const elButton = document.querySelector('.btn')
const elInput = document.querySelector('.input')

elButton.addEventListener('click', () => {
    elSearch.classList.toggle('active');
    elInput.focus();
})