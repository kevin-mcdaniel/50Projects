const elHeader = document.getElementById('header')
const elTitle = document.getElementById('title')
const elExcerpt = document.getElementById('excerpt')
const elProfileImage = document.getElementById('profile_img')
const elName = document.getElementById('name')
const elDate = document.getElementById('date')
const elAnimatedBgs = document.querySelectorAll('.animated-bg');
const elAnimatedBgTexts = document.querySelectorAll('.animated-bg-text');

function getData() {
    elHeader.innerHTML = '<img src="https://source.unsplash.com/random/350x200" alt="" />';
    elTitle.innerText = 'Lorem ipsum dolor sit amet.';
    elExcerpt.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, debitis?';
    elProfileImage.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">';
    elName.innerText = 'John Doe';
    elDate.innerText = 'Oct 08, 2020';

    elAnimatedBgs.forEach(bg => {
        bg.classList.remove('animated-bg');
    });

    elAnimatedBgTexts.forEach(bg => {
        bg.classList.remove('animated-bg-text');
    });
}

setTimeout(getData, 2000);