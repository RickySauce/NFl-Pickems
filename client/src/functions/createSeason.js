export function createSeason(){
  fetch(`/api/seasons/new`)
  .then(resp => resp.json())
}
