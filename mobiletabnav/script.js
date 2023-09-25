const contents = document.querySelectorAll('.content');
const mobileNav = document.querySelectorAll('nav ul li');

function hideAllContents() {
    contents.forEach(content => {
        content.classList.remove('show');
    });
}

function hideAllItems() {
    mobileNav.forEach(navItem => {
        navItem.classList.remove('active');
    });
}

mobileNav.forEach((navItem, idx) =>{
    navItem.addEventListener('click', () => {
        hideAllContents();
        hideAllItems();
        navItem.classList.add('active');
        contents[idx].classList.add('show');
    })
})