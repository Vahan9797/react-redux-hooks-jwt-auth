import axios from 'axios';
import { API_URL } from '../constants';

const register = (email, password, passwordConfirmation) => {
  return axios.post(API_URL + "registration", {
    email,
    password,
    passwordConfirmation
  })
}

const login = (email, password) => {
  return axios.post(API_URL + 'authenticate', {
    email,
    password
  })
  .then(response => {
    response.data.token && localStorage.setItem('user', JSON.stringify(response.data));

    return response.data;
  })
}

const logout = () => {
  localStorage.removeItem('user');
}

export { register, login, logout }