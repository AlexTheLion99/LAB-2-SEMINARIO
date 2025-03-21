var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchPokemon } from './pokemon';
import { renderPokemon } from './ui';
const input = document.getElementById('searchInput');
const button = document.getElementById('searchBtn');
const resultDiv = document.getElementById('result');
button.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    const name = input.value.trim();
    if (!name)
        return;
    resultDiv.innerHTML = "🔄 Buscando...";
    try {
        const pokemon = yield fetchPokemon(name);
        renderPokemon(pokemon);
    }
    catch (error) {
        resultDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
}));
