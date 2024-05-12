const API_KEY = '43840799-e71ea23b4db8ae9f9c01a8841';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = query => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(BASE_URL + '?' + searchParams.toString());
};
