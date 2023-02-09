const KEY = '107f2ec399e531ab0199241ff8bd59c1';
const BaseURL = 'https://api.themoviedb.org/3';

async function fetchMoviesErrorHandling(url = '') {
  const response = await fetch(url);

  return response.ok ? await response.json() : Promise.reject(new Error('Not Found'));
}

export function getTrendingMovies() {
  return fetchMoviesErrorHandling(`${BaseURL}/trending/movie/week?api_key=${KEY}`);
}

export function getMovie(movieName, page) {
  return fetchMoviesErrorHandling(
    `${BaseURL}/search/movie?api_key=${KEY}&language=en-US&page=${page}&include_adult=false&query=${movieName}`,
    console.log(movieName),
  );
}

export function getMovieDetails(movieID) {
  return fetchMoviesErrorHandling(`${BaseURL}/movie/${movieID}?api_key=${KEY}&language=en-US`);
}

export function getMovieCredits(movieID) {
  return fetchMoviesErrorHandling(
    `${BaseURL}/movie/${movieID}/credits?api_key=${KEY}&language=en-US`,
  );
}

export function getMovieReviews(movieID) {
  return fetchMoviesErrorHandling(
    `${BaseURL}/movie/${movieID}/reviews?api_key=${KEY}&language=en-US&page=1`,
  );
}
