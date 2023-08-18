const elHour = document.querySelector('.hour');
const elMinute = document.querySelector('.minute');
const elSecond = document.querySelector('.second');
const elTime = document.querySelector('.time');
const elDate = document.querySelector('.date');
const btnToggle = document.querySelector('.toggle');

//Rather than resetting the arc back to 0 at the rounding of a hour/minute/second and causing the rotation 
//to reset counter clockwise we are going to use variables to continue to add degrees past 360
let totalHourArc = 0;
let totalMinuteArc = 0;
let totalSecondArc = 0;

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapToScale(num, in_min, in_max, out_min, out_max) {
    //function for mapping a value to scale
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

//Pulling all of the calculations out of the set time function

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

    if(mapToScale(hoursForClock, 0, 12, 0, 360) === 0){
        if(totalHourArc + 360 === 2147483880){
            //we can only track until we hit the max integer value so we have to do the hitch in the 
            //animation to reset the value to 0. 2147483880 is the last number evenly divisible by
            //360
            totalHourArc = 0;

        } else {
            totalHourArc += 360;
        }
    }
    
    if(mapToScale(minutes, 0, 60, 0, 360) === 0){
        if(totalMinuteArc + 360 === 2147483880){
            totalMinuteArc = 0;
        } else {
            totalMinuteArc += 360;
        }
        
    }

    if(mapToScale(seconds, 0, 60, 0, 360) === 0){
        if(totalSecondArc + 360 === 2147483880){
            totalSecondArc = 0;
        } else {
            totalSecondArc += 360;
        }
    }

    //Get the hour rotation, then determine how much extra rotation to add based off the number of minutes.
    //An hour arc is 30 degrees so our additional mapToScale should max at 30 (out-max)
    //Also note that in order to get the proper 30 degrees you need 12 hours (in-max) not 11
    const hourRotation = totalHourArc + mapToScale(hoursForClock, 0, 12, 0, 360) + mapToScale(minutes, 0, 60, 0, 30)
    const minuteRotation = totalMinuteArc + mapToScale(minutes, 0, 60, 0, 360)
    const secondRotation = totalSecondArc + mapToScale(seconds, 0, 60, 0, 360)
    return { minutes, hoursForClock, hourRotation, minuteRotation, secondRotation, ampm};
}

function setTime() {

    const {dayName, month, day} = getDateValues();
    const {minutes, hoursForClock, hourRotation, minuteRotation, secondRotation, ampm} = getTimeValues();
    
    elTime.innerHTML = `${String(hoursForClock).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${ampm}`;
    elDate.innerHTML = `${dayName}, ${month} <span class="circle">${day}</span>`;
    
    if(!totalSecondArc === 0){
        elSecond.style.transition = 'none';
    } else {
        elSecond.style.transition = 'all 0.5s ease-in';
    }

    if(!totalMinuteArc === 0){
        elMinute.transition = 'none';
    } else {
        elMinute.transition = 'all 0.5s ease-in';
    }

    if(!totalHourArc === 0){
        elHour.transition = 'none';
    } else {
        elHour.transition = 'all 0.5s ease-in';
    }

    elHour.style.transform = `translate(-50%, -100%) rotate(${hourRotation}deg)`;
    elMinute.style.transform = `translate(-50%, -100%) rotate(${minuteRotation}deg)`;
    elSecond.style.transform = `translate(-50%, -100%) rotate(${secondRotation}deg)`;
    
}

btnToggle.addEventListener('click', (e) =>{
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
