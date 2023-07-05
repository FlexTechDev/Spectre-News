import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; // ensure correct import path
import { auth } from './firebase';
import { useNavigate, Link } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
      setError(null);
      navigate('/news');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/news');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="signin-container">
      <button className="home-button" onClick={handleGoHome}>Go Home</button>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
        <button type="button" onClick={handleSignInWithGoogle}>Continue with Google</button>
      </form>
      {error && <p>{error}</p>}
      <p>Don't have an account? <Link className="link" to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default SignIn;
