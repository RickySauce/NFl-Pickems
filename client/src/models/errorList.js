import React from 'react';
import capitalize from '../functions/capitalize'
import Errors from '../error'

export class ErrorList {

  constructor(json) {
    for(var el in json){
      this[el] = json[el];
    };

    function conventionialize(key){
      let keyArray = key.split('_')
      let capArray = keyArray.slice(1).map(el => capitalize(el))
      let newKey = [keyArray[0], ...capArray].join('')
      return newKey
    }
  }

  dispatchErrors(){
    for(var el in this){
      document.getElementById(el).append(<Errors/>)
    }
  }

}
