import { Pokemon } from './pokemon';
import { searchPokemon } from './index';

export function displayPokemonInfo(pokemon: Pokemon): void {
  const container = document.getElementById('pokemon-info');
  if (!container) return;

  container.innerHTML = `
    <h2>${pokemon.name} (#${pokemon.id})</h2>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <p><strong>Tipos:</strong> ${pokemon.types.map(t => t.type.name).join(', ')}</p>
    <p><strong>Habilidades:</strong> ${pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
    <p><strong>Peso:</strong> ${pokemon.weight} kg</p>
  `;
}

export function displayError(message: string): void {
  const container = document.getElementById('pokemon-info');
  if (!container) return;
  container.innerHTML = `<p class="error">${message}</p>`;
}

export function updateSearchHistory(): void {
  const historyContainer = document.getElementById('search-history');
  if (!historyContainer) return;

  const history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
  historyContainer.innerHTML = history.map((name: string) => `<button class="history-item">${name}</button>`).join('');
  attachHistoryEventListeners();
}

export function attachHistoryEventListeners(): void {
  document.querySelectorAll('.history-item').forEach(button => {
    button.removeEventListener('click', handleHistoryClick);
    button.addEventListener('click', handleHistoryClick);
  });
}

function handleHistoryClick(event: Event): void {
  const target = event.target as HTMLElement;
  searchPokemon(target.textContent || '');
}
