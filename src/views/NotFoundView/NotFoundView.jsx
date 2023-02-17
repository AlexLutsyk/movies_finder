import s from './NotFoundView.module.css';
import Container from '../../components/Container';

export default function NotFoundView() {
  return (
    <>
      <Container>
        <h1 className={s.NotFound}>404 This page is not found</h1>
      </Container>
    </>
  );
}
