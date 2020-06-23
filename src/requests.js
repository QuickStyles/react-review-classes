import { MARVEL_PUBLIC_KEY } from './secrets';
const BASE_URL = 'https://gateway.marvel.com'; // Marvel API Endpoint

export function getCharacters() {
  return fetch(`${BASE_URL}/v1/public/characters?apikey=${MARVEL_PUBLIC_KEY}`)
    .then(res => res.json())
    .then(payload => payload)
}