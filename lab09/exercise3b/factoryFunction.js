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
// ES6

{ 
    class Person{
        constructor(name){
            this.name = name;
        }
    }

    function Teacher(){
        
        // Person.call(this);
    }

    //const teacher = new MountainBike();

    Teacher.prototype = Object.create(Person.prototype, name);

    Teacher.prototype.teach = function(subject) {
        console.log(this.name + " is now teaching " + subject);
    }

    const teacher = new Teacher("test");
    teacher.teach("Math");

    // const bike = new Bicycle();
    // const mountainBike = new MountainBike();
    
    // console.log("Bicycle speed: " + bike.speed);
    // bike.speedUp(5);
    // console.log("Bicycle increased bike.speedUp(5) : " + bike.speed);
    // bike.applyBrake(2);
    // console.log("Bicycle decreased the current speed bike.applyBrake(2): " + bike.speed);
    // bike.applyBrake(4);
    // console.log("Bicycle decreased the current speed bike.applyBrake(4): " + bike.speed);

    // console.log("Mountain bike gear: " + mountainBike.gear);
    // mountainBike.setGear(10);
    // console.log("Mountain bike set gear to setGear(10): " + mountainBike.gear);
    // console.log("Mountain bike the current speed 0: " + mountainBike.speed);
    // mountainBike.speedUp(20);
    // console.log("Mountain bike increased speed speedUp(20): " + mountainBike.speed);
    // mountainBike.applyBrake(15);
    // console.log("Mountain bike decreased speed to applyBrake(15): " + mountainBike.speed);
};
