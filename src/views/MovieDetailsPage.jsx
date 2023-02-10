import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/apiMovies';

export default function MovieDetailsPage() {
  const { movieID } = useParams();
  const [movie, setMovie] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState(() => {
    return JSON.parse(window.localStorage.getItem('favoriteMovies')) ?? [];
  });

  useEffect(() => {
    getMovieDetails(movieID).then(response => {
      setMovie(response);
    });
  }, [movieID]);

  useEffect(() => {
    window.localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  const onAddFilm = id => {
    const equalFilm = favoriteMovies.find(movie => {
      console.log(movie.id.toString() === id);
      return movie.id.toString() === id ? true : false;
    });

    if (equalFilm) {
      alert(`This movie is already in your library`);
      return favoriteMovies;
    } else {
      setFavoriteMovies([movie, ...favoriteMovies]);
    }
  };

  const { poster_path, title, vote_average, vote_count, overview, status } = movie;

  return (
    <>
      {movieID ? (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={title}
            width="400"
            height="600"
          />
          <h3>{title}</h3>
          <p>Vote Everage: {vote_average}</p>
          <p>Vote Count: {vote_count}</p>
          <p>Status: {status}</p>
          <p>{overview}</p>
          <button type="button" onClick={() => onAddFilm(movieID)}>
            Add To Favorite
          </button>
          <Link to="/">Back to home</Link>
          <Link to="/movies">Back to search movie</Link>
        </div>
      ) : (
        <div>
          <h2>Sorry, this film is not found.</h2>
          <Link to="/">Back to home</Link>
          <Link to="/movies">Back to search movie</Link>
        </div>
      )}
    </>
  );
}
