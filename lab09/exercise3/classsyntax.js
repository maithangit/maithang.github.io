"use strict";

/*
Exercise 3:
3a. Create an object called Teacher derived from a Person function constructor, and
implement a method called teach that receives a string called subject, and prints out:
[teacher's name] is now teaching [subject]. The ‘teach’ method should be on the Teacher
prototype. Create two Teacher objects and call their teach method. The Person constructor
should set name and age fields, but not subject since that only applies to Teachers. You
should have a Teacher constructor that sets the subject field. The Person prototype should
have a method, favoriteHobby, that prints ‘My name is [name] and my hobby is
[somePerson.hobby]’. The Person prototype should have a property ‘species’ and the value
for all Persons should be ‘homo sapien’.
3b. Implement the same object relations using Object.create. When using Object.create
you can use a regular function instead of a function constructor in order to set the values of
object properties on object instances. Or, you could set them directly on the object
instances.
3c. Implement the same object relations using the ES6 Class syntax.
*/

{
    class Person{
        hobby;
        name;
        age;
        constructor(name, age){
            this.name = name;
        }

        setHobby = hobby => {
            this.hobby = hobby;
        }

        favoriteHobby = () => {
            console.log("My name is " + this.name + " and my hobby is " + this.hobby);
        }
    }
    class Teacher extends Person {
        constructor(name, age, subject){
            super(name, age);
            this.subject = subject;
        }

        teach = () => {
            console.log(this.name + " is now teaching " + this.subject);
        }
    }

    const aPerson = new Person("Thang Mai", 34);
    aPerson.setHobby("Programming");
    aPerson.favoriteHobby(); 

    const teacher1 = new Teacher("John Doe", 42, "Math");
    teacher1.teach();

    const teacher2 = new Teacher("John Cena", 57, "Computer Science");
    teacher2.teach();
};