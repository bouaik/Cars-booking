const setUser = (payload) => ({ type: 'SET_USER', payload });

export const logUserOut = () => ({ type: 'LOG_OUT' });

export const fetchUser = (userInfo) => (dispatch) => {
  fetch(`http://localhost:4000/login`, {
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
  fetch(`http://localhost:4000/users`, {
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
      dispatch(setUser(data.user));
    });
};

export const autoLogin = () => (dispatch) => {
  fetch(`http://localhost:4000/auto_login`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // localStorage.setItem('token', data.token);
      dispatch(setUser(data));
    });
};
