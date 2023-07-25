const elLeft = document.querySelector('.left');
const elRight = document.querySelector('.right')
const elContainer = document.querySelector('.container');

elLeft.addEventListener('mouseenter', () => elContainer.classList.add('hover-left'));
elLeft.addEventListener('mouseleave', () => elContainer.classList.remove('hover-left'));

elRight.addEventListener('mouseenter', () => elContainer.classList.add('hover-right'));
elRight.addEventListener('mouseleave', () => elContainer.classList.remove('hover-right'));
