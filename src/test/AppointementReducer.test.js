import appointementReducer from '../redux/reducers/appointementReducer';

describe('Appointment reducer', () => {
  const initialState = [];

  it('should return the Appointment collection when fetching request is successfully', () => {
    expect(
      appointementReducer(initialState, {
        type: 'FETCH_APPOINTEMENTS',
        payload: [{ city: 'tantan', date: '20/10/2020', time: '12:12:12' }],
      }),
    ).toEqual({
      appointements: [{ city: 'tantan', date: '20/10/2020', time: '12:12:12' }],
    });
  });
});
