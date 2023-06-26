import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'


const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '7d6b9f54bbmsh7b8d43aa8520697p14e477jsn818a9786fb82',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)

  return data
}