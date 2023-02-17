import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCredits } from '../../services/apiMovies';

import s from './MovieDetailsView.module.css';
import MovieCard from '../../components/MovieCard';
import ActorCard from '../../components/ActorCard';

export default function MovieDetailsPage() {
  const { movieID } = useParams();
  const [movie, setMovie] = useState([]);
  const [actors, setActors] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState(() => {
    return JSON.parse(window.localStorage.getItem('favoriteMovies')) ?? [];
  });

  useEffect(() => {
    getMovieDetails(movieID).then(response => {
      setMovie(response);
    });
  }, [movieID]);

  useEffect(() => {
    getMovieCredits(movieID).then(response => {
      setActors(response.cast);
    });
  }, [movieID]);

  useEffect(() => {
    window.localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  const onAddFilm = id => {
    const equalFilm = favoriteMovies.find(movie => {
      return movie.id.toString() === id ? true : false;
    });

    if (equalFilm) {
      alert(`This movie is already in your library`);
      return favoriteMovies;
    } else {
      alert(`This movie is added to your library`);
      setFavoriteMovies([movie, ...favoriteMovies]);
    }
  };

  const { poster_path, title, vote_average, vote_count, overview, status, release_date } = movie;

  return (
    <>
      {movieID ? (
        <MovieCard
          movieID={movieID}
          moviePoster={poster_path}
          title={title}
          voteEvarage={vote_average}
          voteCount={vote_count}
          overview={overview}
          status={status}
          releaseDate={release_date}
          onAddFilm={onAddFilm}
        />
      ) : (
        <div>
          <h2>Sorry, this film is not found.</h2>
          <NavLink to="/">Back to home</NavLink>
        </div>
      )}

      {actors && (
        <ul className={s.ActorCardList}>
          {actors.map(actor => {
            const { cast_id, profile_path, name } = actor;
            return (
              <li className={s.ActorCardItem} key={cast_id}>
                <ActorCard img={profile_path} actorName={name} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
