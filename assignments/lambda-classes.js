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
        super(instructorAttrs);
        this.newSpecialty = instructorAttrs.specialty;
        this.newFavLanguage = instructorAttrs.favLanguage;
        this.newCatchPhrase = instructorAttrs.catchPhrase;
    }
    demo(subject){
        `Today we are learning about ${this.subject}.`;
    }
    grade(student, subject){
        `${this.name} receives a perfect score on ${this.subject}.`;
    }
}
class Student {
    constructor(studentAttrs){
        super(studentAttrs);
        this.newPreviousBackground = studentAttrs.newPreviousBackground;
        this.newClassName = studentAttrs.className;
        this.newFavSubjects = studentAttrs.favSubjects;
    }
    listsSubject(favSubjects){

    }
    PRAssignment(){
        `${student.name} has submitted a PM for ${this.subject};`
    }
    sprintChallenge(){
        `${student.name} has begun sprint challege on ${this.subject};`
    }
    
}  
class ProjectManager {
    constructor(pmAttrs){
    super(pmAttrs);
    this.newGradClassName = projectmanager.gradClassName;
    this.newFavInstructor = projectmanager.favInstructor;
    }
    standUp(){

    }
}    
