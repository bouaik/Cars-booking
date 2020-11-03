const defaultState = {
  loading: true,
  user: {},
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_SET_USER':
      return {
        ...state,
        loading: true,
      };
    case 'SET_USER':
      return {
        loading: false,
        user: action.payload,
      };
    case 'LOG_OUT':
      localStorage.clear();
      return {
        loading: false,
        user: {},
      };
    default:
      return state;
  }
};

export default userReducer;
