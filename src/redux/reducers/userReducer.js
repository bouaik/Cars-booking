const defaultState = {
  user: {},
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        user: { ...action.payload },
      };
    case 'LOG_OUT':
      localStorage.clear();
      return {
        user: {},
      };
    default:
      return state;
  }
};

export default userReducer;
