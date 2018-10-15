export function logOut(user){
  return (dispatch) => {
    dispatch({type: 'LOG_OUT'})
    sessionStorage.removeItem("ID");
  };
};
