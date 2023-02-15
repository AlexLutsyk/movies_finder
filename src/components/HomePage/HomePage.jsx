import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as moviesAPI from '../../services/apiMovies';
import Container from '../Container';

import s from './HomePage.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesAPI.getTrendingMovies().then(res => {
      setMovies(res.results);
    });
  }, []);

  return (
    <>
      <Container>
        {movies && (
          <ul className={s.FilmList}>
            {movies.map(movie => {
              return (
                <li className={s.FilmList_item} key={movie.id}>
                  <Link to={`movies/${movie.id}`} className={s.FilmList_Link}>
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
                </li>
              );
            })}
          </ul>
        )}
      </Container>
    </>
  );
}
