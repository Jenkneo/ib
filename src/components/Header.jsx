import React from 'react';

function Header({ onLogout }) {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <h1>Калькулятор защиты информации</h1>
          <button className="logout-btn" onClick={onLogout}>Выйти</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;