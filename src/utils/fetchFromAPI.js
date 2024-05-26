import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  // url: BASE_URL,
  params: {
    //  q: 'music',
    //  part: 'snippet,id',
    //  regionCode: 'US',
     maxResults: '50',
    //  order: 'date',
  },
  headers: {
    'X-RapidAPI-Key': '63cc7af300mshbbd30a2c16c4b01p1c567djsnbab3514c64a3',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}

