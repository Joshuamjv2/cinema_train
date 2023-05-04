
const API_KEY = process.env.API_KEY
const endpoint = "https://api.themoviedb.org/3/movie"
const genre = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`



export const api_config = {
    apiKey: API_KEY,
    movies_endpoint: endpoint,
    genre_endpoint: genre
}
