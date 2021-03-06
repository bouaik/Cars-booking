import axios from 'axios';
import API_ROOT from '../../fetch/apiRoot';

const fetchAppointementsRequest = appointements => ({
  type: 'FETCH_APPOINTEMENTS',
  payload: appointements,
});

export const fetchAppointements = username => dispatch => {
  axios
    .get(`${API_ROOT}/appointements`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      params: {
        username,
      },
    })
    .then(data => {
      dispatch(fetchAppointementsRequest(data.data));
    });
};

export const bookAppointement = appointementInfo => () => {
  fetch(`${API_ROOT}/appointements`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(appointementInfo),
  });
};
