export function changeCurrentWeek(weekId){
  return (dispatch) => {
    dispatch({type: 'CHANGE_CURRENT_WEEK', weekId})
  }
};
