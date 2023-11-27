import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {

  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  }

  return (
    <main>
      <h1>AuthPage</h1>
      {showLoginForm ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
      <button onClick={toggleForm}>
        {showLoginForm ? 'Switch to Sign Up' : 'Switch to Login'}
      </button>
    </main>
  );
}