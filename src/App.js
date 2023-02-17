import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Container from './components/Container';

import SharedNavBar from './views/SharedNavBar';
import SharedMoviesLayout from './views/SharedMoviesLayout';

import MovieDetailsView from './views/MovieDetailsView/MovieDetailsView';

const HomePage = lazy(() => import('./views/HomePage/HomePage' /* webpackChunkName: "HomePage" */));
const MovieView = lazy(() =>
  import('./views/MovieView/MovieView' /* webpackChunkName: "MovieView" */),
);
const LibraryView = lazy(() => import('./views/LibraryView' /* webpackChunkName: "LibraryView" */));
const NotFoundView = lazy(() =>
  import('./views/NotFoundView' /* webpackChunkName: "NotFoundView" */),
);
/* webpackChunkName: "Home-Page" */
function App() {
  return (
    <>
      <Container>
        <Suspense fallback={<h4>LOADING...</h4>}>
          <Routes>
            <Route path="/" element={<SharedNavBar />}>
              <Route index element={<HomePage />} />

              <Route path="movies" element={<SharedMoviesLayout />}>
                <Route index element={<MovieView />} />
                <Route path=":movieID" element={<MovieDetailsView />}></Route>
              </Route>

              <Route path="library" element={<LibraryView />} />

              <Route path="*" element={<NotFoundView />} />
            </Route>
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
