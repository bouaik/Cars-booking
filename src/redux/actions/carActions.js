import { API_ROOT } from '../../fetch/apiRoot';

const fetchCarsRequest = (cars) => ({
  type: 'FETCH_CARS',
  payload: cars,
});

export const fetchCars = () => (dispatch) => {
  fetch(`${API_ROOT}/cars`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(fetchCarsRequest(data));
    });
};
