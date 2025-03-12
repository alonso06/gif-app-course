export const getGiphy = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=DG5lW5PV3TmCFDUTpr4RnyA99nir2IuD&q=${category}&limit=10`;
    const responseGiphy = await fetch(url);
    const { data } = await responseGiphy.json();

    const gifs = data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));
    
    return gifs
}