import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getMovie } from '../services/apiMovies';
import s from './views.module.css';
import Container from '../components/Container';
import MovieFinder from '../components/MovieFinder';

export default function MovieView() {
  const [currentFilmName, setCurrentFilmName] = useState('');
  const [foundedMovies, setFoundedMovies] = useState([]);

  const onSubmitName = name => {
    setCurrentFilmName(name);
  };

  useEffect(() => {
    if (!currentFilmName) {
      return;
    }

    getMovie(currentFilmName, 1).then(response => {
      if (response.results === 0) {
        alert('Movie not found, try again with a different name');
        return;
      }
      setFoundedMovies(response.results);
    });
  }, [currentFilmName]);
  return (
    <>
      <Container>
        <MovieFinder onSubmitFilmName={onSubmitName} />
        {foundedMovies && (
          <ul className={s.SearchList}>
            {foundedMovies.map(movie => {
              const { title, poster_path, release_date, id } = movie;
              return (
                <li className={s.FilmList_item} key={movie.id}>
                  <Link to={`/movies/${id}`} className={s.FilmList_Link}>
                    <img
                      className={s.FilmList_img}
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/original/${poster_path}`
                          : '../../img/noImg.png'
                      }
                      alt={title}
                    />
                    <div className={s.FilmList_descContainer}>
                      <h3 className={s.FilmList_header}>{title}</h3>
                      <p className={s.FilmList_date}>Relise Date: {release_date}</p>
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
