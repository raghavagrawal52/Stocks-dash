import stocks from '../api/stocks';

export const fetchStock = () => async (dispatch) => {
  const response = await stocks.get(`/stocks/`);
  dispatch({ type: 'FETCH_STOCK', payload: response.data[0] });
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
