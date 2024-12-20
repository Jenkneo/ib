import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import UsersTable from '../components/admin/UsersTable';
import { getUsers } from '../services/adminApi';

function AdminPage({ user }) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data.users);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadUsers();
  }, []);

  // Проверяем, является ли пользователь администратором
  if (!user?.isAdmin) {
    return <Navigate to="/" replace />;
  }

  if (isLoading) {
    return <div className="loading">Загрузка...</div>;
  }

  if (error) {
    return <div className="error">Ошибка: {error}</div>;
  }

  return (
    <div className="admin-page">
      <h2 className="form-title">Список пользователей</h2>
      <UsersTable users={users} />
    </div>
  );
}

export default AdminPage;