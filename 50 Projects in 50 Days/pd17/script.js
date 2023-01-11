const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=55e11e149af190ecacada02a35a5e8b2&page=1'
const IMG_PATH = 'https://images.tmdb.org/t/p/w1280'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=55e11e149af190ecacada02a35a5e8b2&query="'

// Get initial movies

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    console.log(data.resutls)
}