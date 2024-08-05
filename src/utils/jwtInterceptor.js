import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/', // our API base URL
  headers: {
    // "Content-Type": "application/x-www-form-urlencoded",
    // 'Access-Control-Allow-Origin': 'http://localhost:3000',
    // 'Access-Control-Allow-Credentials': 'true'
    // 'Accept-Encoding': 'gzip, deflate, br',
    // 'Content-Security-'
  },
});

// Request interceptor for adding the bearer token
api.interceptors.request.use(
  (config) => {
    // config.withCredentials = true; 

    const token = localStorage.getItem('access_token'); // Assuming you store the token in localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    // config.headers['withCredentials'] = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


// Export the api instance
export default api;
