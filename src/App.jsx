
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './Pages/MainPage';
import Header from './components/Header';
import MovieDetail from './Pages/MovieDetail';

function App() {
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;