let myApiKey;

if (process.env.NODE_ENV === "production") {
  myApiKey = process.env.VITE_API_KEY;
} else {
  myApiKey = import.meta.env.VITE_API_KEY;
}

const apiResponseGif = apiResponse => {
  const {data= []} = apiResponse;

  if(Array.isArray(data)) {
    const gifs = data.map(gif => {
      const { images, title, id } = gif;
      const { url } = images.downsized_medium;
      return { title, id, url }
    });
    return gifs;
  };
  return [];
} 

export const getGifs = ({ limit = 25, keyword, page = 0 }) => {
  // export const getGifs = ({keyword = 'Digimon'} = {}) => {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${myApiKey}&q=${keyword}&limit=${limit}&limit=15&offset=${page * limit}&rating=g&lang=en`;

  return fetch(apiURL)
    .then(res => res.json())
    .then(apiResponseGif)
    .catch(err => console.log(err));
};
