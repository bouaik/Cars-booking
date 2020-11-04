import { API_ROOT } from '../../fetch/apiRoot';

const fetchAppointementsRequest = (appointements) => ({
  type: 'FETCH_APPOINTEMENTS',
  payload: appointements,
});

export const fetchAppointements = () => (dispatch) => {
  fetch(`${API_ROOT}/appointements`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(fetchAppointementsRequest(data));
    });
};
