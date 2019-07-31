"use strict";

/*
Exercise 1:
    Define a filter function on the String object. The function accepts an array of strings that
    specifies a list of banned words. The function returns the string after removing all the
    banned words.
    Example:
    console.log("This house is not nice!".filter('not'));
    Output: "This house is nice!"
*/
String.prototype.filter = function( arg ) {
    return this.replace(arg,"").replace("  "," ");
};

console.log("This house is not nice!".filter('not'));