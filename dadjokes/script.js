const elJoke = document.getElementById('joke');
const elButton = document.getElementById('jokeBtn');

generateJoke();

async function generateJoke(){
    const config = {
        headers: {
          Accept: 'application/json',
        },
      }
    const result = await fetch('https://icanhazdadjoke.com', config);

    const data = await result.json();
    elJoke.innerHTML = data.joke;
}


elButton.addEventListener('click', () =>{
    generateJoke();
})


