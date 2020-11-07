import { API_ROOT } from '../../fetch/apiRoot';
import axios from 'axios';

const fetchAppointementsRequest = (appointements) => ({
  type: 'FETCH_APPOINTEMENTS',
  payload: appointements,
});

export const fetchAppointements = (username) => (dispatch) => {
  axios
    .get(`${API_ROOT}/appointements`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      params: {
        username: username,
      },
    })
    .then((data) => {
      dispatch(fetchAppointementsRequest(data.data));
    });
};

export const bookAppointement = (appointementInfo) => (dispatch) => {
  fetch(`${API_ROOT}/appointements`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(appointementInfo),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch(fetchAppointementsRequest(data));
    });
};
