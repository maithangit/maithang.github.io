"use strict";
/*
Exercise 2:
    Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
    that works by repeatedly stepping through the list to be sorted,
    Example:[6,4,0, 3,-2,1].bubbleSort();
    Output : [-2, 0, 1, 3, 4, 6]
*/
Array.prototype.bubbleSort = function() {
    var swap = function (arr, index1, index2) {
        const temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    };
    

    let stop;

    for (let i = 0; i < this.length; i++){
        for (let j = 0, stop = this.length-i; j < stop; j++){
            if (this[j] > this[j+1]){
                swap(this, j, j+1);
            }
        }
    }
    return this;
}

const arr = [6, 4, 0, 3, -2, 1];
console.log(arr.bubbleSort());