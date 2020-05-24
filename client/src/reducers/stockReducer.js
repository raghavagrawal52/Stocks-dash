export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_STOCK':
      return { ...state, [action.payload._id]: action.payload };
    default:
      return state;
  }
};
