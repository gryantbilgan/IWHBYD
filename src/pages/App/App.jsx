import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import CreateSpartanPage from "../CreateSpartanPage/CreateSpartanPage";
import BookPage from "../BookPage/BookPage";
import CharacterPage from "../CharacterPage/CharacterPage";
import SpartanPage from "../SpartanPage/SpartanPage";
import WeaponPage from "../WeaponPage/WeaponPage";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      {/* <h1 className='neon-text'>IWHBYD</h1> */}
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/books" element={<BookPage />} />
            <Route path="/characters" element={<CharacterPage />} />
            <Route path="/weapons" element={<WeaponPage />} />
            <Route path="/generate" element={<CreateSpartanPage />} />
            <Route path="/" element={<SpartanPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}
