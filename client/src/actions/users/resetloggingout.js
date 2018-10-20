export function resetLoggingOut(){
  return (dispatch) => {
    dispatch({type: 'RESET_LOGGING_OUT'})
  };
};
