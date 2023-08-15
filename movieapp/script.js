const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=983db769321761285b28b378031de368&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=983db769321761285b28b378031de368&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

async function getMovies(url){
    const resp = await fetch(url);
    const data = await resp.json();
    showMovies(data.results);
}

function showMovies(movies){
    main.innerHTML = '';
    movies.forEach(movie => {
        const {title, poster_path, vote_average, overview } = movie;
        //TODO set the vote average to one decimal point
        const elMovie = document.createElement('div');
        elMovie.classList.add('movie');
        elMovie.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRating(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `;
        main.appendChild(elMovie);
    })

    //TODO Use a document fragment to more efficiently insert this content
}

function getClassByRating(vote){
    if(vote >= 8){
        return 'green';
    } else if (vote >= 5){
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_API + searchTerm)
        search.value=''
    } else {
        window.location.reload();
    }
})


//get initial moves
getMovies(API_URL);