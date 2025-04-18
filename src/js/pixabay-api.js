import axios from 'axios';

import * as gallery from './render-functions';

export function getImagesByQuery(query) {
  gallery.showLoader();
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: '49740043-bed2939fa2e4edbb3e5f2f338',
      q: `${query}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
}
