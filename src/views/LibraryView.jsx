import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiHeartMinus } from 'react-icons/gi';

import s from '../views/views.module.css';
import Container from '../components/Container';

export default function LibraryView() {
  const [favoriteMovies, setFavoriteMovies] = useState(() => {
    return JSON.parse(window.localStorage.getItem('favoriteMovies')) ?? null;
  });

  useEffect(() => {
    window.localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  const onDeleteFilm = id => {
    setFavoriteMovies(
      favoriteMovies.filter(movie => {
        return movie.id !== id;
      }),
    );
  };

  if (favoriteMovies.length === 0) {
    return <h2>Library is empty. Add Your Movie</h2>;
  }

  return (
    <>
      <Container>
        {favoriteMovies ? (
          <ul className={s.FilmList}>
            {favoriteMovies.map(movie => {
              return (
                <li className={s.FilmList_item} key={movie.id}>
                  <Link to={`/movies/${movie.id}`} className={s.FilmList_Link}>
                    <div>
                      <img
                        className={s.FilmList_img}
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.title}
                      />
                      <div className={s.FilmList_descContainer}>
                        <h3 className={s.FilmList_header}>{movie.title}</h3>
                        <p className={s.FilmList_date}>Relise Date: {movie.release_date}</p>
                      </div>
                    </div>
                  </Link>
                  <button
                    className={s.LibraryButton_minus}
                    type="button"
                    onClick={() => onDeleteFilm(movie.id)}
                  >
                    <GiHeartMinus className={s.GiHeartMinus} size="30px" />
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <h2>Library is empty. Add Your Movie</h2>
        )}
      </Container>
    </>
  );
}
