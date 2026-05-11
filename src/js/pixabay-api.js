import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '55818365-f46e85877dddde0fe9a7f00cb';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}