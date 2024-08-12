// const poke_conteiner = document.querySelector(".poke-container");
// const search = document.querySelector(".search");
// const searchBtn = document.querySelector(".searchbtn");
// const searchInput = document.querySelector(".searchınput");
// const pokemon_count = 151;

// const bg_color = {
//   grass: "#EBEBE5",
//   fire: "#8AD268",
//   water: "#3399FF",
//   bug: "#AABB22",
//   normal: "#AAAA99",
//   flying: "#8899FF",
//   poison: "#AA5599",
//   electric: "#FFCC33",
//   ground: "#DDBB55",
//   fairy: "#EE99EE",
//   psychic: "#FF5599",
//   fighting: "#BB5544",
//   rock: "#BBAA66",
//   dragon: "#7766EE",
//   ice: "#66CCFF",
// }

// searchBtn.addEventListener("click", () => {
//   search.classList.toggle("active");
// });

// searchInput.addEventListener('input',(e)=>{
//     const searchValue=searchInput.value.toLowerCase();
//     const pokemonNames=document.querySelectorAll('.poke-name');

//     pokemonNames.forEach((pokemonName){

// pokemonNames.parentElement.parentElement.style.display="block";
//         if(pokemonName.innerHTML.toLowerCase().includes(searchValue)){
//              pokemonNames.parentElement.parentElement.style.display="none"
//         }

//     })
// })

// const fetchPokemon = async () => {
//   for (let i = 1; i < pokemon_count; i++) {
//     await getPokemon(i);
//   }
// };

// const getPokemon = async (id) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   const res = await fetch(url);
//   const data = await res.json();
//   createPokemonCart(data);
// };
// const createPokemonCart=(pokemon)=>{
//     const pokemonType=pokemon.types[0].type.name
// const pokemonBg=bg_color[pokemonType]
// // pokeDiv.style.backgroundColor=`${pokemonBg}`
//     const pokeDiv=document.createElement("div")
//     pokeDiv.classList.add("pokemon")

//     const pokemonId=pokemon.id.toString().padStart(3,'0')

//     const pokemonDivInnerHTML=`
//     <div class="image-container">
//                 <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="first pokemon">
//             </div>
//             <div class="poke-info">
//                 <span class="poke-id">#${pokemonId}</span>
//                 <h3 class="poke-name">${pokemon.name}</h3>
//                 <small class="poke-exp">
//                     <i class="fa solid fa-flask"></i>${pokemon.base_experience}exp
//                 </small>
//                 <small class="poke-exp">
//                     <i class="fa solid fa-flask"></i>${pokemon.weight}kg
//                 </small>
//             </div>
//             <div class="poke-type"> <i class="fa-brands fa-uncharted"> ${pokemon.types[0].type.name} </i></div>
// `
// pokeDiv.innerHTML=pokemonDivInnerHTML
// poke_conteiner.appendChild(pokeDiv)
// }
// fetchPokemon();

const poke_container = document.querySelector(".poke-container");
const search = document.querySelector(".search");
const searchBtn = document.querySelector(".searchbtn");
const searchInput = document.querySelector(".searchinput");
const pokemon_count = 151;

const bg_color = {
  grass: "#EBEBE5",
  fire: "#8AD268",
  water: "#3399FF",
  bug: "#AABB22",
  normal: "#AAAA99",
  flying: "#8899FF",
  poison: "#AA5599",
  electric: "#FFCC33",
  ground: "#DDBB55",
  fairy: "#EE99EE",
  psychic: "#FF5599",
  fighting: "#BB5544",
  rock: "#BBAA66",
  dragon: "#7766EE",
  ice: "#66CCFF",
};

searchBtn.addEventListener("click", () => {
  search.classList.toggle("active");
});

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();
  const pokemonNames = document.querySelectorAll(".poke-name");

  pokemonNames.forEach((pokemonName) => {
    const pokemonCard = pokemonName.closest(".pokemon");
    if (pokemonName.innerHTML.toLowerCase().includes(searchValue)) {
      pokemonCard.style.display = "block";
    } else {
      pokemonCard.style.display = "none";
    }
  });
});

const fetchPokemon = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
  const pokemonType = pokemon.types[0].type.name;
  const pokemonBg = bg_color[pokemonType];

  const pokeDiv = document.createElement("div");
  pokeDiv.classList.add("pokemon");
  pokeDiv.style.backgroundColor = pokemonBg;

  const pokemonId = pokemon.id.toString().padStart(3, "0");

  const pokemonDivInnerHTML = `
    <div class="image-container">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}">
    </div>
    <div class="poke-info">
      <span class="poke-id">#${pokemonId}</span>
      <h3 class="poke-name">${pokemon.name}</h3>
      <small class="poke-exp">
        <i class="fa solid fa-flask"></i>${pokemon.base_experience} exp
      </small>
      <small class="poke-exp">
        <i class="fa solid fa-flask"></i>${pokemon.weight} kg
      </small>
    </div>
    <div class="poke-type">
      <i class="fa-brands fa-uncharted"></i> ${pokemon.types[0].type.name}
    </div>
  `;

  pokeDiv.innerHTML = pokemonDivInnerHTML;
  poke_container.appendChild(pokeDiv);
};

fetchPokemon();
