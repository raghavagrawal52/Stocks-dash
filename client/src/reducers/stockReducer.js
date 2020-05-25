export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_STOCK':
      return { ...state, [action.payload._id]: action.payload };
    default:
      return state;
  }
};

export const signIn = (userId) => {
  return {
    type: 'SIGN_IN',
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT',
  };
};
