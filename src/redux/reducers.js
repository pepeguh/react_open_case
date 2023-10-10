import { SET_BALANCE } from './actions';

const initialState = {
  balance: 0 // Значение по умолчанию
};
const balanceReducer = (state = initialState,action) => {
  switch (action.type) {
    case SET_BALANCE:
      return {
        ...state,
        balance: action.payload,
      };
    default:
      return state;
  }
};

export default balanceReducer;