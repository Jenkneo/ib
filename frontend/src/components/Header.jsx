import React from 'react';
import { Link } from 'react-router-dom';

function Header({ onLogout, user }) {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <h1>Калькулятор защиты информации</h1>
          <div className="nav-links">
            <Link to="/" className="nav-link">Калькулятор</Link>
            <Link to="/profile" className="nav-link">Личный кабинет</Link>
            {user?.isAdmin ? (
              <Link to="/admin" className="nav-link">Администрирование</Link>
            ) : null}
            <button className="logout-btn" onClick={onLogout}>Выйти</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;