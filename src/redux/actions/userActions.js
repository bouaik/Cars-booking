import { API_ROOT } from '../../fetch/apiRoot';

const setUser = (payload) => ({ type: 'SET_USER', payload });

export const logUserOut = () => ({ type: 'LOG_OUT' });

export const fetchUser = (userInfo) => (dispatch) => {
  fetch(`${API_ROOT}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem('token', data.token);
      dispatch(setUser(data));
    });
};

export const signUserUp = (userInfo) => (dispatch) => {
  fetch(`${API_ROOT}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem('token', data.token);
      dispatch(setUser(data));
    });
};

export const autoLogin = () => (dispatch) => {
  fetch(`${API_ROOT}/auto_login`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(setUser(data));
    });
};
