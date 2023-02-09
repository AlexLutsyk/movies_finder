import { useState } from 'react';

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
      <form onSubmit={handleMovieSubmit}>
        <label className={s.MovieFinder_label} type="text">
          Enter the name movie that you want to find:
        </label>
        <input type="text" value={movieName} onChange={handleMovieName} />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
