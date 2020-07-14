const token = localStorage.getItem('authToken');

export const baseUrl = 'http://localhost:3001';
export const baseHeaders = {
    'Authorization': token ? `Bearer ${token}` : ''
};
