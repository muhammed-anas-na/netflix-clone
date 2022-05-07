import { API_KEY } from "./constance/constance"
export const netflix_originals = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`
export const action_movies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
export const romance_movie = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`