"use strict";

/*
Exercise 3:
    a) Create an object called Teacher derived from a Person function constructor, and implement
    a method called teach that receives a string called subject, and prints out: [teacher's name]
    is now teaching [subject]. Create a Teacher object and call its teach method.
    
    b) Also do the same thing using Object.create. When using Object.create you will need a
    factory function instead of a function constructor in order to pass parameters such as
    ‘name’ to be set in the prototype.
*/

// implementation for exercise 3a
// IIFE

(function(){
    class Person{
        constructor(name){
            this.name = name;
        }
    }
    class Teacher extends Person {
        constructor(name){
            super(name);
        }
        teach(subject){
            console.log(this.name + " is now teaching " + subject);
        }
    }

    var teacher = new Teacher("John Doe");
    teacher.teach("Maths");
})();