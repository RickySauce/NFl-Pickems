export function newSeason(){
  return (dispatch) => {
    fetch(`/api/seasons/new`)
    .then(resp => resp.json())
  };
};
