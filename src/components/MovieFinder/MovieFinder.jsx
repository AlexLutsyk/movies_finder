import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

import s from './MovieFinder.module.css';

export default function MovieFinder({ onSubmitFilmName }) {
  const [movieName, setMovieName] = useState('');

  const handleMovieName = e => {
    setMovieName(e.target.value);
  };

  const handleMovieSubmit = e => {
    e.preventDefault();
    if (!movieName) {
      alert('Please enter a movie name');
      return;
    }

    onSubmitFilmName(movieName);
    setMovieName('');
  };

  return (
    <>
      <form onSubmit={handleMovieSubmit} className={s.Form}>
        <label className={s.MovieFinder_label} type="text">
          Enter the name movie that you want to find:
        </label>
        <input
          className={s.MovieFinder_input}
          type="text"
          value={movieName}
          onChange={handleMovieName}
        />
        <button className={s.MovieFinder_button} type="submit">
          <BiSearchAlt className={s.BiSearch} size="30px" />
        </button>
      </form>
    </>
  );
}
