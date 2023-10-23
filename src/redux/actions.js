export const SET_BALANCE = 'SET_BALANCE';
export const SET_SNAKEBITE_SKINS = 'SET_SNAKEBITE_SKINS';
export const SET_FRACTURE_SKINS = 'SET_FRACTURE_SKINS';

export const setBalance = (balance) => ({
  type: SET_BALANCE,
  payload: balance,
});

export const setSnakebiteSkins = (snakebite_skins) =>({
  type: SET_SNAKEBITE_SKINS,
  payload: snakebite_skins,
});

export const setFractureSkins = (fracture_skins)=>({
  type: SET_FRACTURE_SKINS,
  payload: fracture_skins,
});


// 
