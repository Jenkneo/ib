import React from 'react';

function UsersTable({ users }) {
  return (
    <div className="overflow-x-auto">
      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Email</th>
            <th>Организация</th>
            <th>Отрасль</th>
            <th>Годовой бюджет</th>
            <th>Бюджет на ИБ</th>
            <th>Размер организации</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.organizationName || '-'}</td>
              <td>{user.industryType || '-'}</td>
              <td>{user.annualBudget ? `${user.annualBudget.toLocaleString()} руб.` : '-'}</td>
              <td>{user.securityBudget ? `${user.securityBudget.toLocaleString()} руб.` : '-'}</td>
              <td>{user.organizationSize || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;