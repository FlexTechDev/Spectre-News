import React, { useState, useContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, signOut } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider'; // import AuthContext
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext); // use AuthContext

  useEffect(() => {
    if (currentUser) {
      navigate('/news');
    }
  }, [currentUser, navigate]);

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
      setError(null);
    } catch (error) {
      let errorMsg;
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMsg = "Email already in use.";
          break;
        case 'auth/invalid-email':
          errorMsg = "Please provide a valid email address.";
          break;
        case 'auth/operation-not-allowed':
          errorMsg = "Sign up operation is not allowed. Please try again later.";
          break;
        case 'auth/weak-password':
          errorMsg = "Password is weak. Please choose a stronger password.";
          break;
        default:
          errorMsg = "Failed to sign up. Please try again.";
      }

      setError(errorMsg);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("Error signing out: ", error);
    }
  };

  const handleSignUpWithGoogle = async () => {
    try {
      await handleSignOut();
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
    } catch (error) {
      setError("Failed to sign up with Google. Please try again. (Safari has known issues, please try again with a different browser when trying to sign up with Google).");
    }
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="signup-container">
      <button className="home-button" onClick={handleGoHome}>Go Home</button>
      <form onSubmit={handleSignUp}>
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
        <button type="submit">Sign Up</button>
        <button type="button" className="google-btn" onClick={handleSignUpWithGoogle}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Logo" height="18px" style={{marginRight: '10px'}}/>
          Continue with Google
        </button>
      </form>
      {error && <p>{error}</p>}
      <p>Already have an account? <Link className="link" to="/signin">Sign In</Link></p>
    </div>
  );
};

export default SignUp;
