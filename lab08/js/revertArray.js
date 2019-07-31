export default function reverseArray(arr) {
    let newArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    return newArray;
}

Array.prototype.reverseArray = function() {
    let newArray = [];
    for (let i = this.length - 1; i >= 0; i--) {
      newArray.push(this[i]);
    }
    return newArray;
}