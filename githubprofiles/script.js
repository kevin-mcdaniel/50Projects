const API = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUser(username){

    try{
        const {data} = await axios(API + username);

        createUserCard(data);
        getRepos(username)
    } catch(err) {
        if(err.response.status == 404){
            createErrorCard('No profile with this username');
        }
    }
    
}

async function getRepos(username){
    try{
        const {data} = await axios(`${API}${username}/repos?sort=created`)
        addReposToCard(data);
    } catch(err){
        createErrorCard('Problem fetching repos')
    }
}

function createUserCard(user){
    const userID = user.name || user.login;
    const userBio = user.bio ? `<p>${user.bio}</p>` : '';
    const cardHTML = `
    <div class="card">
    <div>
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
        <h2>${userID}</h2>
        ${userBio}
        <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>
        <div id="repos"></div>

    </div>
    `
    main.innerHTML = cardHTML;

}

function createErrorCard(msg){
    const cardHTML = `
    <div class="card">
        <h1>${msg}</h1>
    </div>
    `
    main.innerHTML = cardHTML

}

function addReposToCard(repos){
    const elRepos = document.getElementById('repos');

    repos.slice(0,5)
        .forEach(repo => {
            elRepo = document.createElement('a');
            elRepo.classList.add('repo')
            elRepo.href = repo.html_url;
            elRepo.target = '_blank';
            elRepo.innerText = repo.name;
            elRepos.appendChild(elRepo);
        })
}



form.addEventListener('submit', e => {
    e.preventDefault();
    const user = search.value;

    if(user) {
        getUser(user);
        search.value='';
    } 
})