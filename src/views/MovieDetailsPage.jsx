import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/apiMovies';

export default function MovieDetailsPage() {
  const { movieID } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovieDetails(movieID).then(response => {
      setMovie(response);
    });
  }, [movieID]);

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
