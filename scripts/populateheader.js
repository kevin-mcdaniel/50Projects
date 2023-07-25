
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
    },
    {
        name: 'Event KeyCodes',
        url: 'keycodes'
    },
    {
        name: 'FAQ Collapse',
        url: 'faq'
    },
    {
        name: 'Random Choice Picker',
        url: 'randomchoice'
    },
    {
        name: 'Animated Navigation',
        url: 'animatednav'
    },
    {
        name: 'Incrementing Counter',
        url: 'incrementingcounter'
    },
    {
        name: 'Drink Water',
        url: 'drinkwater'
    },
    {
        name: 'Movie App',
        url: 'movieapp'
    },
    {
        name: 'Background Slider',
        url: 'backgroundslider'
    },
    {
        name: 'Theme Clock',
        url: 'themeclock'
    },
    {
        name: 'Button Ripple Effect',
        url: 'buttonripple'
    },
    {
        name: 'Drag N Drop',
        url: 'dragndrop'
    },
    {
        name: 'Drawing App',
        url: 'drawingapp'
    },
    {
        name: 'Kinetic CSS Loader',
        url: 'kineticloader'
    },
    {
        name: 'Content Placeholder',
        url: 'contentplaceholder'
    },
    {
        name: 'Sticky Navbar',
        url: 'stickynav'
    },
    {
        name: 'Double Vertical Slider',
        url: 'doubleslider'
    },
    {
        name: 'Toast Notification',
        url: 'toastnotification'
    },
    {
        name: 'Github Profiles',
        url: 'githubprofiles'
    },
    {
        name: 'Double Heart Click',
        url: 'doubleheart'
    },
    {
        name: 'Auto Text Effect',
        url: 'autotexteffect'
    },
    {
        name: 'Password Generator',
        url: 'passwordgenerator'
    },
    {
        name: 'Good, Cheap, Fast Checkboxes',
        url: 'checkboxes'
    },
    {
        name: 'Notes App',
        url: 'notesapp'
    },
    {
        name: 'Animated Countdown',
        url: 'animatedcountdown'
    },
    {
        name: 'Image Carousel',
        url: 'imagecarousel'
    },
    {
        name: 'Hoverboard',
        url: 'hoverboard'
    },
    {
        name: 'Pokedex',
        url: 'pokedex'
    },
    {
        name: 'Mobile Tab Navigation',
        url: 'mobiletabnav'
    },
    {
        name: 'Password Strength Background',
        url: 'passwordstrength'
    },
    {
        name: '3D Background Boxes',
        url: 'backgroundboxes'
    },
    {
        name: 'Verify Account UI',
        url: 'verifyaccount'
    },
    {
        name: 'Live User Filter',
        url: 'liveuserfilter'
    },
    {
        name: 'Feedback UI Design',
        url: 'feedbackui'
    },
    {
        name: 'Custom Range Slider',
        url: 'customrangeslider'
    },
    {
        name: 'Netflix Navigation',
        url: 'netflixnav'
    },
    {
        name: 'Quiz App',
        url: 'quizapp'
    },
    {
        name: 'Testimonial Box Switcher',
        url: 'testimonialswitcher'
    },
    {
        name: 'Random Image Feed',
        url: 'randomimagefeed'
    },
    {
        name: 'Todo List',
        url: 'todolist'
    },
    {
        name: 'Insect Catch',
        url: 'insectcatch'
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


