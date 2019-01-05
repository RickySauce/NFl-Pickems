export function resetPending(){
  return (dispatch) => {
    dispatch({type: 'RESET_PENDING'})
  };
};
