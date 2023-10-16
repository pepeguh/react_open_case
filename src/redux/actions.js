export const SET_BALANCE = 'SET_BALANCE';

export const SET_SKINS = 'SET_SKINS';

export const setSkins = (skins) =>({
  type: SET_SKINS,
  payload: skins,
});

export const setBalance = (balance) => ({
  type: SET_BALANCE,
  payload: balance,
});

// 
