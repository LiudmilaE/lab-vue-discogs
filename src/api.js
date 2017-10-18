import axios from 'axios'

const discogs = axios.create({
  baseURL: "https://api.discogs.com",
  httpAgent: "Ironhack Paris liudmyla.iefremova/1.0 +http://localhost",
  params: {
    token: 'hzSKsfjDZeSddXHexoozqlDDWEHnBxFdxHjnfkdK'
  }
});

export function searchArtists(query) {
  return discogs.get(`/database/search?q=${query}&type=artist`)
    .then(response => {
      return response.data.results;
    })
    .catch(err => {
      console.error(err);
      return null;
    });
}