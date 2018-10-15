export function signUp(user){
  return (dispatch) => {
    dispatch({ type: 'SIGN_UP', user});
    return sessionStorage.setItem("ID", `${user.id}`);
  };
};
