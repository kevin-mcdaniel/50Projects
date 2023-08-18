const elHour = document.querySelector('.hour');
const elMinute = document.querySelector('.minute');
const elSecond = document.querySelector('.second');
const elTime = document.querySelector('.time');
const elDate = document.querySelector('.date');
const btnToggle = document.querySelector('.toggle');


// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapToScale(num, in_min, in_max, out_min, out_max) {
    //function for mapping a value to scale
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function getDateValues() {
    //Handles the descriptive name text

    const date = new Date();
    const locale = 'en-US';
    const dayName = date.toLocaleDateString(locale, {weekday:'long'});
    const month = date.toLocaleDateString(locale, {month:'short'});
    const day = date.toLocaleDateString(locale, {day:'numeric'});
    //if an object's key name is the same as it's value you don't need to put both key and value
    // {month:month, day:day, year:year} === {month, day, year}
    return {dayName, month, day}
}

function getTimeValues(){
    //Handles the time values and sets rotation arcs

    const time = new Date();
    const hours = time.getHours();
    const hoursForClock = hours % 12
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM' 

    //Get the hour rotation, then determine how much extra rotation to add based off the number of minutes.
    //An hour arc is 30 degrees so our additional mapToScale should max at 30 (out-max)
    //Also note that in order to get the proper 30 degrees you need 12 hours (in-max) not 11
    const hourRotation = mapToScale(hoursForClock, 0, 12, 0, 360) + mapToScale(minutes, 0, 60, 0, 30)
    const minuteRotation = mapToScale(minutes, 0, 60, 0, 360)
    const secondRotation = mapToScale(seconds, 0, 60, 0, 360)
    return { minutes, hoursForClock, hourRotation, minuteRotation, secondRotation, ampm};
}

function setTime() {
    //Handles the actual display logic
    
    //destructure the returned values into individual variables.
    const {dayName, month, day} = getDateValues();
    const {minutes, hoursForClock, hourRotation, minuteRotation, secondRotation, ampm} = getTimeValues();
    
    elTime.innerHTML = `${String(hoursForClock).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${ampm}`;
    elDate.innerHTML = `${dayName}, ${month} <span class="circle">${day}</span>`;
    
    if(secondRotation === 0){
        //scale function returns 0 rather than 360 so manually set the rotation to 360 to complete the arc
        elSecond.style.transform = `translate(-50%, -100%) rotate(360deg)`;
        //we need to wait the .5sec for the animation to complete before
        setTimeout(()=>{
            elSecond.style.transform = `translate(-50%, -100%) rotate(0deg)`;
            elSecond.style.transition = 'none';
            elHour.transition = 'all 0.5s ease-in';
        }, 500);
        
    } else {
        elSecond.style.transition = 'all 0.5s ease-in';
        elSecond.style.transform = `translate(-50%, -100%) rotate(${secondRotation}deg)`;
    }

    if(minuteRotation === 0){
        elMinute.style.transform = `translate(-50%, -100%) rotate(360deg)`;
        setTimeout(()=>{
            elMinute.style.transform = `translate(-50%, -100%) rotate(0deg)`;
            elMinute.style.transition = 'none';
        }, 500);
    } else {
        elMinute.transition = 'all 0.5s ease-in';
        elMinute.style.transform = `translate(-50%, -100%) rotate(${minuteRotation}deg)`;
    }
    
    if(hourRotation === 0){
        elMinute.style.transform = `translate(-50%, -100%) rotate(360deg)`;
        setTimeout(()=>{
            elHour.style.transform = `translate(-50%, -100%) rotate(0deg)`;
            elHour.style.transition = 'none';

        }, 500);
    } else {
        elHour.transition = 'all 0.5s ease-in';
        elHour.style.transform = `translate(-50%, -100%) rotate(${hourRotation}deg)`;
    }

}

btnToggle.addEventListener('click', (e) =>{
    //toggle between light and dark mode
    const elHtml = document.querySelector('html');
    if(elHtml.classList.contains('dark')){
        elHtml.classList.remove('dark');
        e.target.innerHTML = 'Dark Mode';
    } else {
        elHtml.classList.add('dark');
        e.target.innerHTML = 'Light Mode';
    }
});


setInterval(setTime, 1000)
