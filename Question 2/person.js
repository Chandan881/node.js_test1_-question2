
module.exports = class Person{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getfullName() {
        console.log(this.firstName + " " + this.lastName);
    }
}