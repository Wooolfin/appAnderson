import axios from 'axios';


const api = axios.create({
  baseURL: 'https://6651257720f4f4c442770732.mockapi.io/api/'
});

export default api;