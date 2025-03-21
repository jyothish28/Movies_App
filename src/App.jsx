
import './css/App.css'
import NavBar from './components/NavBar'
import Favorite from './pages/Favorites'
import Home from './pages/Home'
import { MovieProvider } from './contexts/MovieContext'
import { Routes, Route} from 'react-router-dom'

function App() {
  

  return (
    <MovieProvider>
      <NavBar />
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </main>
    </MovieProvider>
  );
}


export default App
