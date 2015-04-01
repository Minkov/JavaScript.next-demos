class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(newFirstname){
        const minLength = 3;
        const maxLength = 15;

        if(typeof(newFirstname) !== 'string' || newFirstname.legth < minLength || newFirstname.length > maxLength) {
            throw new Error(`The first name must be a string with legth between ${minLength} and ${maxLength}`);
        }
        this._firstName = newFirstname;
    }    
    get lastName(){
        return this._lastName;
    }
    set lastName(newLastname){
        const minLength = 3;
        const maxLength = 15;

        if(typeof(newLastname) !== 'string' || newLastname.legth < minLength || newLastname.length > maxLength) {
            throw new Error(`The last name must be a string with legth between ${minLength} and ${maxLength}`);
        }
        this._lastName = newLastname;
    }
    get age(){
        return this._age;
    }
    set age(newAge){
        const minAge = 3;
        const maxAge = 200;

        if(typeof(newAge) !== 'number' || newAge < minAge || newAge > maxAge) {
            throw new Error(`The age must be a number between ${minAge} and ${maxAge}`);
        }
        this._age = newAge;
    }
    get fullname(){
        return `${this.firstName} ${this.lastName}`;
    }
    introduce(){
        console.log(`Hello! My name is ${this.fullname} and I am ${this.age}-years-old!`);
    }
}

class Student extends Person{
    constructor(fname, lname, age, grade){
        super(fname, lname, age);
        this.grade = grade;
    }
}

module.exports = {
    Student,
    Person
};