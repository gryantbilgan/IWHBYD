import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import BookPage from '../BookPage/BookPage';
import CharacterPage from '../CharacterPage/CharacterPage';
import WeaponPage from '../WeaponPage/WeaponPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <h1>IWHBYD</h1>
            <Routes>
              {/* Route components in here */}
              <Route path="/books" element={<BookPage />} />
              <Route path="/characters" element={<CharacterPage />} />
              <Route path="/weapons" element={<WeaponPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
