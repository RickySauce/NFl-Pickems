

export function deleteUser(id) {
  return (dispatch) => {
    dispatch({type: "REMOVE_USER", id: id})
  }
}
