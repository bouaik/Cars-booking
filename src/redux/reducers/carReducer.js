const defaultState = {
  cars: [],
};

const carReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_CARS':
      return {
        cars: action.payload,
      };
    default:
      return state;
  }
};

export default carReducer;
