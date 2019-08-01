'use strict';

export default function arrayToList(arr) {
    let obj = {};
    for(var i = 0 ; i < arr.length; i++) {
      if(i == arr.length) {
       return obj.rest = null;
      }
      obj.value = arr.splice(0,1)[0];
      obj.rest = arrayToList(arr);
    }
    return obj;
  };

//console.log(arrayToList([1,2,3,4,5]));

Array.prototype.arrayToList = function() {
    let list = {};
    for(let i = 0 ; i < this.length; i++) {
      if(i == this.length) {
       return list.rest = null;
      }
      list.value = this.splice(0,1);
      list.rest = arrayToList(arr);
    }
    return list;
}
