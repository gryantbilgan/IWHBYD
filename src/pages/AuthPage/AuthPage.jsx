import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer';
import './AuthPage.css'

export default function AuthPage({ setUser }) {

  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  }

  return (
    <div className="AuthPage">
      <div>
        <h1 className='AP text-black'>AuthPage</h1>
        <MusicPlayer />
        {showLoginForm ? (
          <LoginForm setUser={setUser} />
        ) : (
          <SignUpForm setUser={setUser} />
        )}
        <button onClick={toggleForm}>
          {showLoginForm ? 'Switch to Sign Up' : 'Switch to Login'}
        </button>
      </div>
    </div>
  );
}