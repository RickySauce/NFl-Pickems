import capitalize from '../functions/capitalize'

export class ErrorList {

  constructor(json) {
    for(var el in json){
      this[conventionialize(el)] = json[el];
    };

    function conventionialize(key){
      console.log(capitalize)
    };
  }

}
