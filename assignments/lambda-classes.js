// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.newName = attributes.name;
        this.newAge = attributes.age;
        this.newLocation = attributes.location;
    }
    speak(){
        `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}
class Instructor {
    constructor(instructorAttrs){
        super(instructorAttrs)
        this.newSpecialty = instructorAttrs.specialty;
        this.newFavLanguage = instructorAttrs.favLanguage'
        this.newCatchPhrase = instructorAttrs.catchPhrase'
    }
    demo(){
        `Today we are learning about ${this.subject}.`;
    }
    grade(){
        
    }
}