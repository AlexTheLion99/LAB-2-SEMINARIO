
import { fetchFromApi } from './api';

export interface PokemonSprites {
  [key: string]: string | null;
}

export interface PokemonResponse {
  id: number;
  name: string;
  sprites: PokemonSprites;
}

export function fetchPokemon(nameOrId: string) {
  return fetchFromApi<PokemonResponse>('pokemon', nameOrId);
}

