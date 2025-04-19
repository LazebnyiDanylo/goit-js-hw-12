import axios from 'axios';

import * as render from './render-functions';

export async function getImagesByQuery(query, page) {
  render.showLoader();
  return await axios.get('https://pixabay.com/api/', {
    params: {
      key: '49740043-bed2939fa2e4edbb3e5f2f338',
      q: `${query}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page,
    },
  });
}
