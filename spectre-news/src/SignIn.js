import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, signOut } from 'firebase/auth';
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

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("Error signing out: ", error);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await handleSignOut();
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
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
        <button type="button" className="google-btn" onClick={handleSignInWithGoogle}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Logo" height="18px" style={{marginRight: '10px'}}/>
          Continue with Google
        </button>
      </form>
      {error && <p>{error}</p>}
      <p>Don't have an account? <Link className="link" to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default SignIn;
