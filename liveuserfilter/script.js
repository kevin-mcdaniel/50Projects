const APIURL = 'https://randomuser.me/api?results=50';

const result = document.getElementById('result');
const filter = document.getElementById('filter');

const listItems = [];

getData();

filter.addEventListener('input', (e) => filterData(e.target.value));

async function getData() {
    const res = await fetch(APIURL);
    const { results } = await res.json();

    result.innerHTML = '';
    results.forEach(user => {

        const li = document.createElement('li');
        const template = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
        li.innerHTML = template;
        listItems.push(li);

        result.appendChild(li);
    })
    
}

function filterData(searchTerm){

    listItems.forEach(item => {

        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    })
}