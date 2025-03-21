
import { fetchPokemon } from './pokemon';
import { renderPokemon } from './ui';

const input = document.getElementById('searchInput') as HTMLInputElement;
const button = document.getElementById('searchBtn') as HTMLButtonElement;
const resultDiv = document.getElementById('result')!;

button.addEventListener('click', async () => {
  const name = input.value.trim();
  if (!name) return;

  resultDiv.innerHTML = "🔄 Buscando...";

  try {
    const pokemon = await fetchPokemon(name);
    renderPokemon(pokemon);
  } catch (error) {
    resultDiv.innerHTML = `<p style="color:red;">${(error as Error).message}</p>`;
  }
});

