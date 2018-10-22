import React from 'react';
import capitalize from '../functions/capitalize'

export class Pojo{

  constructor(json) {
    for(var el in json){
      if (typeof(json[el]) === "object" && Array.isArray(json[el]) === false){
        this[conventionialize(el)] = new Pojo(json[el])
      } else if (typeof(json[el]) === "object" && Array.isArray(json[el])){
        this[conventionialize(el)] = json[el].map(el => new Pojo(el))
      } else {
        this[conventionialize(el)] = json[el];
      };
    };

    function conventionialize(key){
      let keyArray = key.split('_')
      let capArray = keyArray.slice(1).map(el => capitalize(el))
      let newKey = [keyArray[0], ...capArray].join('')
      return newKey
    }
  }

}
