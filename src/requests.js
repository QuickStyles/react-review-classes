import { MARVEL_PUBLIC_KEY } from './secrets';
const MARVEL_BASE_URL = 'https://gateway.marvel.com'; // Marvel API Endpoint
const BASE_URL = 'http://localhost:3000/api/v1'; // Custom Rails API

export function getCharacters() {
  return fetch(`${MARVEL_BASE_URL}/v1/public/characters?apikey=${MARVEL_PUBLIC_KEY}`)
    .then(res => res.json())
    .then(payload => payload)
}

export const Characters = {
  index() {
    return fetch(`${BASE_URL}/characters`)
      .then(res => res.json())
      .then(payload => payload);
  }
}