"use strict";

function reverseArrayInPlace(array) {
  let i = 0;
  let middle = Math.floor(array.length / 2);
  let temp = null;

  for (let i=0; i < middle; i += 1) {
    temp = array[i];
    array[i] = array[n - 1 - i];
    array[n - 1 - i] = temp;
  }
}

Array.prototype.reverseArrayInPlace = function() {
  let i = 0;
  let middle = Math.floor(this.length / 2);
  let temp = null;

  for (let i=0; i < middle; i += 1) {
    temp = this[i];
    this[i] = this[n - 1 - i];
    this[n - 1 - i] = temp;
  }
}