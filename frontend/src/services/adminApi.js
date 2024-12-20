import { API_URL } from "../config";

export async function getUsers() {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Не авторизован');
  }

  const response = await fetch(`${API_URL}/admin/users`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Ошибка при получении списка пользователей');
  }
  
  return response.json();
}