import { fetchFromApi } from './api';
import { Pokemon } from './pokemon';
import { displayPokemonInfo, displayError, updateSearchHistory, attachHistoryEventListeners } from './ui';

let currentPokemonId = 1;

export async function searchPokemon(nameOrId: string): Promise<void> {
  try {
    const pokemon = await fetchFromApi<Pokemon>("pokemon", nameOrId);
    currentPokemonId = pokemon.id;
    displayPokemonInfo(pokemon);
    saveToHistory(pokemon.name.toLowerCase());
    updateSearchHistory();
  } catch (error) {
    displayError('No se encontró el Pokémon. Inténtalo de nuevo.');
  }
}

function saveToHistory(pokemonName: string): void {
  let history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
  if (!history.includes(pokemonName)) {
    history.push(pokemonName);
    localStorage.setItem('searchHistory', JSON.stringify(history));
  }
}

document.getElementById('searchBtn')?.addEventListener('click', () => {
  const input = (document.getElementById('searchInput') as HTMLInputElement).value.trim();
  if (input) {
    searchPokemon(input);
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') {
    searchPokemon((currentPokemonId + 1).toString());
  } else if (event.key === 'ArrowLeft' && currentPokemonId > 1) {
    searchPokemon((currentPokemonId - 1).toString());
  }
});

document.addEventListener('DOMContentLoaded', () => {
  updateSearchHistory();
  attachHistoryEventListeners();
});
