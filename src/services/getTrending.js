let myApiKey;

if (process.env.NODE_ENV === 'production') {
  myApiKey = process.env.VITE_API_KEY;
} else {
  myApiKey = import.meta.env.VITE_API_KEY;
}

const getTrendingGif = apiResponse => {
  const {data = []} = apiResponse;
  return data;
}

export const getTrending = () => {
  const apiURL = `https://api.giphy.com/v1/trending/searches?api_key=${myApiKey}`;
  return fetch(apiURL)
    .then(res => res.json())
    .then(getTrendingGif)
    .catch(e => console.log(e))
}
