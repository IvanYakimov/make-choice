'use strict';

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
}

const me = new Student('Ivan Yakimovich', 25, 'CS');
console.log(me);
const other = new Student();
console.log(other);