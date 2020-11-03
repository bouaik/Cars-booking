import { API_ROOT } from '../../fetch/apiRoot';

const fetchCarsRequest = (cars) => ({
  type: 'FETCH_CARS',
  payload: cars,
});

export const fetchCars = () => (dispatch) => {
  fetch(`${API_ROOT}/cars`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(fetchCarsRequest(data));
    });
};

export const fetchCar = (id) => (dispatch) => {
  fetch(`${API_ROOT}/cars/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(fetchCarsRequest(data));
    });
};
