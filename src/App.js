import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MoviePage from './pages/MoviePage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/movie/:movieId' element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
      ;
    </div>
  );
}

export default App;
