window.onload = function(){
    let btn = document.querySelector('.btn');
    let contet = document.querySelector('.content');
    async function getPlanets(){
        const res = await fetch('https://swapi.dev/api/planets/');
        const data = await res.json();
        data.results.forEach(element => {
            let div = document.createElement('div');
            div.classList.add('col-3');    
            div.innerHTML = `
            <div class="card mb-3">
            <h5 class="card-header">${element.name}</h5>
            <div class="card-body">
                <p class="card-text">diameter ${element.diameter}</p>
                <p class="card-text">climate ${element.climate}</p>
                <p class="card-text">population ${element.population}</p>
            </div>
            </div>
            `;
            contet.appendChild(div);   
        });
    }

    btn.onclick = function(){
        getPlanets();
    }
};