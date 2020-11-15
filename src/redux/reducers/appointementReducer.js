const defaultState = {
  appointements: [],
};

const appointementReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_APPOINTEMENTS':
      return {
        appointements: action.payload,
      };
    default:
      return state;
  }
};

export default appointementReducer;
