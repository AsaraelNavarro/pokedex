const fetchPokemon = () => {
    const pokeInput = document.getElementById("pokeInput");
    let inputName = pokeInput.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${inputName}`;
    fetch(url)
        .then((res) => {
            /* console.log(res); */
            if (res.status != 200) {
                pokemonImage("./img/not-found.jpg")
            } else {
                return res.json();
            }
        })
        .then((data) => {
            console.log(data);
            let pokeImg = data.sprites.other["official-artwork"].front_default;
            pokemonImage(pokeImg);

            let pokeName = data.name;
            pokemonName(pokeName);

            let pokeType = data.types;
            pokemonType(pokeType);

            let pokeHeight = data.height;
            pokemonHeight(pokeHeight);

            let pokeWeight = data.weight;
            pokemonWeight(pokeWeight);

            let pokeStats = data.stats;
            pokemonStats(pokeStats);

            let pokeMoves = data.moves;
            pokemonMoves(pokeMoves);
        });
};

fetchPokemon();

const pokemonImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
};

const pokemonName = (name) => {
    const pokeName = document.getElementById("pokeName")
    pokeName.innerHTML = name
}

/* const pokemonType = (name) => {
    const pokeType = document.getElementById("pokeType")
    pokeType.innerHTML = name;
    pokeType.classList.add(name);
} */
const pokemonType = (types) => {
    const pokeType = document.getElementById("pokeType")
    const iterator = types.values();

    for (const key of iterator) {
        let valueName = key.type.name;
        pokeType.innerHTML += `<span class="type-item ${valueName}">${valueName}</span>`
    }
}

const pokemonHeight = (name) => {
    const pokeHeight = document.getElementById("pokeHeight")
    pokeHeight.innerHTML = name / 10 + ' m'
}

const pokemonWeight = (name) => {
    const pokeWeight = document.getElementById("pokeWeight")
    pokeWeight.innerHTML = name / 10 + ' Kg'
}
const pokemonStats = (stats) => {
    const pokeStats = document.getElementById("pokeStats")
    const iterator = stats.values();

    for (const keys of iterator) {
        let statValue = keys.base_stat;
        let statName = keys.stat.name;
        /* console.log(statName, statValue) */
        pokeStats.innerHTML += `<div class="stat">
                                    <div class="stat-name">
                                        <p>${statName}:</p>
                                    </div>
                                    <div class="stat-progress">
                                        <progress class="progress" id="file" max="100" value="${statValue}"></progress>
                                    </div>
                                </div>`
    }
}

const pokemonMoves = (moves) => {
    const pokeMoves = document.getElementById("pokeMoves")
    const iterator = moves.values();

    for (const moves of iterator) {
        let moveName = moves.move.name;
        /* console.log(statName, statValue) */
        pokeMoves.innerHTML += `<li>${moveName}</li>`
    }
}