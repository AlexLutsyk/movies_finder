import s from './MovieCard.module.css';
import { BsFillBookmarkHeartFill } from 'react-icons/bs';
// BsFillBookmarkHeartFill;

export default function MovieCard({
  movieID,
  moviePoster,
  title,
  voteEvarage,
  voteCount,
  status,
  overview,
  releaseDate,
  onAddFilm,
}) {
  return (
    <div className={s.MovieCard}>
      <img
        className={s.MovieCardImg}
        src={
          moviePoster
            ? `https://image.tmdb.org/t/p/original/${moviePoster}`
            : 'https://upload.wikimedia.org/wikipedia/commons/f/f3/HTTP_404_animated.gif'
        }
        alt={title}
        width="400"
        height="600"
      />
      <div className={s.MovieDescription}>
        <h3>{title}</h3>
        <p>
          <span className={s.DescriptionText}>Release Date:</span> {releaseDate}
        </p>
        <p>
          <span className={s.DescriptionText}>Vote Everage:</span> {voteEvarage}
        </p>
        <p>
          <span className={s.DescriptionText}>Vote Count:</span> {voteCount}
        </p>
        <p>
          <span className={s.DescriptionText}>Status:</span> {status}
        </p>
        <p>
          <span className={s.DescriptionText}>Description:</span>
        </p>
        <p>{overview}</p>
      </div>
      <button className={s.MovieCardButton} type="button" onClick={() => onAddFilm(movieID)}>
        <BsFillBookmarkHeartFill className={s.BsFillBookmarkHeartFill} size={40} />
      </button>
    </div>
  );
}
