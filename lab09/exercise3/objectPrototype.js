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

// implementation for exercise 3b


(function (){ 
    //Person object
    const Person = {
        constructor: function(name, age)  {
            this.name = name;
            this.age = age;
        },
        
        setHobby : function(hobby) {
            this.hobby = hobby;
        },
    
        favoriteHobby : function() {
            console.log("My name is " + this.name + " and my hobby is " + this.hobby);
        }
    
    }


    //Student object
    const Teacher = Object.create(Person);
    Teacher.constructor = function(name, age, subject) {
        this.subject = subject;
        return Person.constructor.call(this, name, age);
    };
    Teacher.teach = function() {
        console.log(this.name + " is teaching " + this.subject);
    }

    const aPerson = Object.create(Person);
    aPerson.constructor("Thang Mai", 34);
    aPerson.setHobby("Programming");
    aPerson.favoriteHobby(); 

    const teacher1 = Object.create(Teacher);
    teacher1.constructor("John Doe", 42, "Math");
    teacher1.teach();

    const teacher2 = Object.create(Teacher);
    teacher2.constructor("John Cena", 57, "Computer Science");
    teacher2.teach();
})();
