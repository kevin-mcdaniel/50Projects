
const navigation = [
    {
        name: 'Expanding Cards',
        url:'expanding'
    },
    {
        name: 'Progress Steps',
        url:'progress'
    },
    {
        name: 'Rotating Navigation',
        url:'rotatingnav'
    },
    {
        name: 'Hidden Search Widget',
        url:'hiddensearch'
    },
    {
        name: 'Blurry Loading',
        url:'blurryloading'
    },
    {
        name: 'Scroll Animation',
        url:'scrollanimation'
    },
    {
        name: 'Split Landing Page',
        url:'splitlanding'
    },
    {
        name: 'Form Wave Animation',
        url:'formwave'
    },
    {
        name: 'Sound Board',
        url:'soundboard'
    },
    {
        name: 'Dad Jokes',
        url:'dadjokes'
    }
]

const origin = window.location.origin
const header = document.createElement('div');
header.classList.add('header');
const navBtn = document.createElement('i')
navBtn.classList.add('fas','fa-bars')


navBtn.addEventListener('click', () => {
    header.classList.toggle('active')
    if(navBtn.classList.contains('fa-bars')){
        navBtn.classList.remove('fa-bars');
        navBtn.classList.add('fa-times');
    } else {
        navBtn.classList.remove('fa-times');
        navBtn.classList.add('fa-bars');
    }
});


header.appendChild(navBtn);
const headerNavigation = document.createElement('ul');
headerNavigation.classList.add('headerNavigation');

const navItems = navigation.map(nav => {

    const navItem = document.createElement('li');
    const navLink = document.createElement('a');
    navLink.href = `${origin}/${nav.url}`;
    navLink.innerText = nav.name;

    navItem.appendChild(navLink)
    
    return navItem;

})

for(navItem of navItems){
    headerNavigation.appendChild(navItem);
}

header.appendChild(headerNavigation);

document.querySelector('body').appendChild(header);


