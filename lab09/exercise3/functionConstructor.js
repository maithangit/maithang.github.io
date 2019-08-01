
(function (){ 
    const Person = function(name, age)
    {
        this.name = name;
        this.age = age;
    }
    Person.prototype.setHobby = function(hobby) {
        this.hobby = hobby;
    }

    Person.prototype.favoriteHobby = function() {
        console.log("My name is " + this.name + " and my hobby is " + this.hobby);
    }

    

    const Teacher = function(name, age, subject) {
        Person.call(this, name, age);
        this.subject = subject;
    }

    Teacher.prototype = Object.create(Person.prototype);

    Teacher.prototype.teach = function() {
        console.log(this.name + " is teaching " + this.subject);
    }

    const aPerson = new Person("Thang Mai", 34);
    aPerson.setHobby("Programming");
    aPerson.favoriteHobby(); 

    const teacher1 = new Teacher("John Doe", 42, "Math");
    teacher1.teach();

    const teacher2 = new Teacher("John Cena", 57, "Computer Science");
    teacher2.teach();

})();
