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
        {showLoginForm ? (
          <LoginForm setUser={setUser} />
        ) : (
          <SignUpForm setUser={setUser} />
        )}
        <button 
          onClick={toggleForm}
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6">
          {showLoginForm ? 'Switch to Sign Up' : 'Switch to Login'}
        </button>
        <MusicPlayer />
      </div>
    </div>
  );
}