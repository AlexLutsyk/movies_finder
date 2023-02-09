import { Routes, Route } from 'react-router-dom';

import Container from './components/Container';
import HomePage from './components/HomePage';
import NotFoundView from './views/NotFoundView';
import MovieView from './views/MovieView';
import MovieDetailsPage from './views/MovieDetailsPage';
import SharedNavBar from './views/SharedNavBar';

function App() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<SharedNavBar />}>
            <Route index element={<HomePage />} />
            <Route path="/:movieID" element={<MovieDetailsPage />} />
            <Route path="movies" element={<MovieView />} />
            {/* <Route path="movies/:movieID" element={<MovieDetailsPage />} /> */}
            <Route path="*" element={<NotFoundView />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
