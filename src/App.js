import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Calculator from './components/Calculator';
import Profile from './components/Profile';
import Header from './components/Header';
import './index.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (email, password) => {
    // В реальном приложении здесь была бы проверка через API
    if (email === 'admin@mail.com' && password === 'admin') {
      setIsAuthenticated(true);
      setCurrentUser({
        email: email,
        firstName: 'Администратор',
        lastName: 'Системы',
        organization: 'ООО Защита',
        industry: 'IT',
        annualBudget: 10000000,
        securityBudget: 1000000,
        organizationSize: 'Средний'
      });
      return true;
    }
    return false;
  };

  const handleRegister = (userData) => {
    // В реальном приложении здесь была бы отправка данных на сервер
    setIsAuthenticated(true);
    setCurrentUser({
      ...userData,
      organization: '',
      industry: '',
      annualBudget: 0,
      securityBudget: 0,
      organizationSize: 'Маленький'
    });
    return true;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  const updateUserProfile = (profileData) => {
    setCurrentUser({ ...currentUser, ...profileData });
  };

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