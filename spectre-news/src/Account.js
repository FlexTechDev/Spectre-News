import React, { useState, useEffect } from "react";
import { getAuth, signOut, sendPasswordResetEmail, deleteUser } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi'; // import icon
import './Account.css'; // import css file

const Account = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  const navigate = useNavigate();

  useEffect(() => {
    setUser(auth.currentUser);
  }, [auth.currentUser]);

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, user.email)
      .then(() => {
        alert("Password reset email sent!");
      })
      .catch((error) => console.log(error));
  };

  const handleDeleteAccount = () => {
    deleteUser(user)
      .then(() => {
        alert("Account deleted successfully!");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  }

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="account-container">
      <h1 className="account-header">Account</h1>
      <button className="back-button" onClick={goBack}><FiArrowLeft /></button>
      <h3 className="account-email">Email: {user && user.email}</h3>
      <button className="account-button" onClick={handleResetPassword}>Reset Password</button>
      <button className="account-button" onClick={handleDeleteAccount}>Delete Account</button>
      <button className="account-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Account;
