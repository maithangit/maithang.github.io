/*
Exercise 4:
Write code that will create person, student, and professor objects.
    • Person objects have
        o name and age fields
        o a greeting method that prints out: “Greetings, my name is [name] and I am [age] years old.”
        o a salute method that prints out: “Good morning!, and in case I dont see you, good afternoon, good evening and good night!”
    • Student objects inherit name, age, and salute from person. They also have a field ‘major’ and have their own greeting method. 
        Their greeting is “Hey, my name is [name] and I am studying [major]. The greeting should be output to the console.
    • Professor objects inherit name, age, and salute from person. They also have a field ‘department’ and have their own greeting method. 
        Their salutation is “Good day, my name is [name] and I am in the [department] department.” Output it to the console.
    • Create a professor object and a student object. Call both the greeting and salutation methods on each.
    • Do this exercise once using the object prototype approach for inheritance and then using the function constructor approach.
*/


(function (){ 
    //Person object
    const Person = {
        constructor: (name, age) => {
            this.name = name;
            this.age = age;
        },
        greeting : () => {  console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old"); },
        salute : () => { console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!"); }
    }


    //Student object
    const Student = Object.create(Person);
    Student.constructor = (name, age, major) => {
        this.major = major;
        return Person.constructor.call(this, name, age);
    };
    Student.greeting = () => {
        console.log("Their greeting is “Hey, my name is " + this.name + " and I am studying " + this.field  + ".");
    }

    //Professor object
    const Professor = Object.create(Person);
    Professor.constructor = (name, age, department) => {
        this.department = department;
        return Person.constructor.call(this, name, age);
    }
    Professor.greeting = () => {
        console.log("Good day, my name is " + this.name + " and I am in the " + department + " department.");
    }



    const aPerson = Object.create(Person);
    aPerson.constructor("The Rock", 40);
    aPerson.greeting();
    aPerson.salute();
    
    const aStudent = Object.create(Student);
    aPerson.constructor("John Doe", 20, "WAP");
    aStudent.greeting();
    aStudent.salute();

    const aProfessor = Object.create(Professor);
    aProfessor.constructor("John Cena", 57, "Computer Science");
    aProfessor.greeting();
    aProfessor.salute();
})();

