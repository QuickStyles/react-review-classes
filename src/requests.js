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
    return fetch(`${BASE_URL}/cards`)
      .then(res => res.json())
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
  },

  current(){
    return fetch(`${BASE_URL}/users/current`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then(res => res.json())
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

export const Deck = {
  create(deckData){
    return fetch(`${BASE_URL}/decks`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(deckData)
    })
    .then(res => res.json())
  },

  forCurrentUser() {
    return fetch(
      `${BASE_URL}/users/decks`,
      {
        credentials: 'include'
    })
      .then(res => res.json())
  },

  show(id) {
    return fetch(`${BASE_URL}/decks/${id}`)
      .then(res => res.json())
  },

  update(data, id) {
    return fetch(`${BASE_URL}/decks/${id}`, 
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(data)
    })
    .then(res => res.json())
  }
}
