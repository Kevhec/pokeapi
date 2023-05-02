const BASE_URL = "https://pokeapi.co/api/v2/";
const input = document.getElementById("pokemon");
const cardName = document.querySelector(".pokemon__name");
const cardTypes = document.querySelector(".pokemon__types");
const cardImage = document.querySelector(".pokemon__image");
const cardStats = document.querySelector(".pokemon__stats");

document.addEventListener("submit", getPokemon);
document.addEventListener('DOMContentLoaded', getPokemon)

async function getPokemon(evt) {
  evt.preventDefault();

  const inputValue = input.value
  const pokemonName = inputValue.toLowerCase().trim() || 1;
  try {
    const res = await fetch(BASE_URL + "pokemon/" + pokemonName + "/");
    const {
      name,
      types,
      sprites: { front_default },
      stats,
    } = await res.json();

    // fill data
    // Set Name
    cardName.textContent = name;

    // Set types
    clearContent(cardTypes);
    types.forEach((type) => {
      const {
        type: { name },
      } = type;

      const container = document.createElement("IMG");

      const imageUrl = new URL(`../assets/types/type__${name}.png`, import.meta.url).href
      container.src = imageUrl;
      container.classList.add('pokemon__type');

      cardTypes.appendChild(container);
    });

    // Set image
    cardImage.children[0].src = front_default;

    // Set stats
    clearContent(cardStats);
    stats.forEach((statInf) => {
      const {
        base_stat,
        stat: { name },
      } = statInf;

      const item = document.createElement("LI");
      item.classList.add('stat');
      const statPic = document.createElement('IMG');
      statPic.classList.add('stat__image');
      const statName = document.createElement('P');
      statName.classList.add('stat__name');
      const statValue = document.createElement('P');
      statValue.classList.add('stat__value');

      const imageUrl = new URL(`../assets/stats/stat__${name}.png`, import.meta.url).href
      statPic.src = imageUrl;
      statName.textContent = name;
      statValue.textContent = base_stat;
      
      item.appendChild(statPic);
      item.appendChild(statName);
      item.appendChild(statValue);
      cardStats.appendChild(item);
    });
  } catch (error) {
    console.log(error.message);
  }
}

function clearContent(ref) {
  while (ref.children[0]) {
    ref.children[0].remove();
  }
}
