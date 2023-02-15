import s from './ActorCard.module.css';

export default function ActorCard({ img, actorName }) {
  return (
    <div className={s.ActorCard}>
      <img
        className={s.ActorImg}
        src={
          img
            ? `https://image.tmdb.org/t/p/original/${img}`
            : 'https://upload.wikimedia.org/wikipedia/commons/f/f3/HTTP_404_animated.gif'
        }
        alt={actorName}
      />
      <p className={s.ActorName}>{actorName}</p>
    </div>
  );
}
