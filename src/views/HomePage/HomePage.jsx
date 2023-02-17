import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsPlusCircleDotted } from 'react-icons/bs';

import * as moviesAPI from '../../services/apiMovies';
import Container from '../../components/Container';

import s from './HomePage.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    moviesAPI.getTrendingMovies(page).then(res => {
      setMovies(res.results);
      setPage(2);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onLoadMore = () => {
    setPage(page + 1);

    moviesAPI.getTrendingMovies(page).then(movies => {
      setMovies(prevMovies => [...prevMovies, ...movies.results]);

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    });
  };
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
                        <p className={s.FilmList_date}>Relise Date: {movie.release_date}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
        <button type="button" className={s.LoadMoreButton} onClick={onLoadMore}>
          <BsPlusCircleDotted className={s.BsPlusCircleDotted} size="50px" />
        </button>
      </Container>
    </>
  );
}
