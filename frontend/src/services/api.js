import { API_URL } from "../config";

async function handleResponse(response) {
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Произошла ошибка');
  }
  return data;
}

export async function login(email, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return handleResponse(response);
}

export async function register(userData) {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  return handleResponse(response);
}

export async function updateProfile(profileData) {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Не авторизован');
  }

  const response = await fetch(`${API_URL}/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(profileData),
  });
  return handleResponse(response);
}

export async function getProfile() {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Не авторизован');
  }

  const response = await fetch(`${API_URL}/profile`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return handleResponse(response);
}