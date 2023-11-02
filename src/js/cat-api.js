import { select, loader } from './index';

const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_7krsDhJaLjVXQehyeACWzGu7EMwB1gQU6ebhoTFOXaWC3zqUcFWCaSzto65jBMk3';
const options = {
  headers: {
    'x-api-key': API_KEY,
  },
};

export function fetchBreeds() {
  const endPoint = '/breeds';
  const url = BASE_URL + endPoint;
  loader.classList.remove('is-hidden');
  return fetch(url, options).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

export function fetchCatByBreed(breedId) {
  const endPoint = '/images/search';
  const params = `?breed_ids=${breedId}`;
  const url = BASE_URL + endPoint + params;
  return fetch(url, options).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
