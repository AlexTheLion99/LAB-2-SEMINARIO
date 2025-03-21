import { fetchFromApi } from './api';
export function fetchPokemon(nameOrId) {
    return fetchFromApi('pokemon', nameOrId);
}
