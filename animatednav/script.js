const elToggle = document.getElementById('toggle');
const elNav = document.getElementById('nav');

elToggle.addEventListener('click', () => {
    elNav.classList.toggle('active');
});