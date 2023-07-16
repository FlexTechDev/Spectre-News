import React, { useEffect, createContext, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import './AuthProvider.css'; // Import the CSS file

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPending(false);
    }, 3000);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      clearTimeout(timeoutId);
      setPending(false);
    });

    return () => {
      clearTimeout(timeoutId);
      unsubscribe();
    };
  }, []);

  if (pending) {
    return (
      <div className="loading-container">
        <p className="loading-text">Please refresh the page if loading takes more than 3 seconds.</p>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
