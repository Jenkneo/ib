import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Calculator from './components/Calculator';
import Profile from './components/Profile';
import Header from './components/Header';
import { getProfile } from './services/api';
import './index.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadUserProfile = async () => {
    try {
      const userData = await getProfile();
      setCurrentUser(userData);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error loading profile:', error);
      localStorage.removeItem('token');
      setIsAuthenticated(false);
      setCurrentUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      loadUserProfile();
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleLogin = async (token) => {
    localStorage.setItem('token', token);
    await loadUserProfile();
  };

  const handleRegister = async (token) => {
    localStorage.setItem('token', token);
    await loadUserProfile();
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  const updateUserProfile = (profileData) => {
    setCurrentUser(prevUser => ({
      ...prevUser,
      ...profileData
    }));
  };

  if (isLoading) {
    return <div className="loading">Загрузка...</div>;
  }

  return (
    <Router>
      {isAuthenticated && <Header onLogout={handleLogout} />}
      <div className="container">
        <Routes>
          <Route 
            path="/login" 
            element={
              !isAuthenticated ? (
                <Login onLogin={handleLogin} />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          <Route 
            path="/register" 
            element={
              !isAuthenticated ? (
                <Register onRegister={handleRegister} />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          <Route 
            path="/profile" 
            element={
              isAuthenticated ? (
                <Profile user={currentUser} onUpdateProfile={updateUserProfile} />
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route 
            path="/" 
            element={
              isAuthenticated ? (
                <Calculator />
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;