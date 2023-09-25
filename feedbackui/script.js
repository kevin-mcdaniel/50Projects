const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const btnSend = document.getElementById('send');
const panel = document.getElementById('panel');

let selectedRating = 'Satisfied';

function removeActive(){
    ratings.forEach(rating =>{
        rating.classList.remove('active');
    })
}

ratingsContainer.addEventListener('click', (e) => {
    
    if(e.target.parentNode.classList.contains('rating')){
        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML
    }


})

btnSend.addEventListener('click', () => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br />
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})