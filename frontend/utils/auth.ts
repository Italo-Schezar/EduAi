// Authentication utilities for the frontend

// Get the token from localStorage
export const getToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
};

// Set the token in localStorage
export const setToken = (token: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', token);
  }
};

// Remove the token from localStorage
export const removeToken = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
  }
};

// Check if the user is authenticated
export const isAuthenticated = (): boolean => {
  return !!getToken();
};

// Get the authenticated user's data from the token
export const getAuthenticatedUser = async (): Promise<any> => {
  const token = getToken();
  
  if (!token) {
    return null;
  }
  
  try {
    const response = await fetch('http://localhost:8000/auth/me', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to get user data');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error getting authenticated user:', error);
    return null;
  }
};

// Logout the user
export const logout = (): void => {
  removeToken();
  if (typeof window !== 'undefined') {
    window.location.href = '/login';
  }
};
