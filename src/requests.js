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

export const User = {
  create(userData) {
    return fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(res => res.json())
      .then(payload => payload)
  }
}

export const Session = {
  create(loginData) {
    return fetch(`${BASE_URL}/session`, 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(loginData)
    })
      .then(res => res.json())
  }
}
