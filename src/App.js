import { Routes, Route } from 'react-router-dom';
import Container from './components/Container';
import HomePage from './components/HomePage';
import NotFoundView from './views/NotFoundView';
import MovieView from './views/MovieView';
import SharedNavBar from './views/SharedNavBar';
import SharedMoviesLayout from './views/SharedMoviesLayout';
import LibraryView from './views/LibraryView';
import MovieDetailsView from './views/MovieDetailsView';

function App() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<SharedNavBar />}>
            <Route index element={<HomePage />} />

            <Route path="movies" element={<SharedMoviesLayout />}>
              <Route index element={<MovieView />} />
              <Route path=":movieID" element={<MovieDetailsView />}>
                {/* <Route path=":movieID/cast" element={<ActorsView />} /> */}
              </Route>
            </Route>

            <Route path="library" element={<LibraryView />} />

            <Route path="*" element={<NotFoundView />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
