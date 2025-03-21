var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const BASE_URL = "https://pokeapi.co/api/v2/";
export function fetchFromApi(resource, identifier) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `${BASE_URL}${resource}/${identifier.toLowerCase()}`;
        const response = yield fetch(url);
        if (!response.ok) {
            throw new Error(`No se pudo obtener ${resource} con identificador "${identifier}"`);
        }
        return yield response.json();
    });
}
