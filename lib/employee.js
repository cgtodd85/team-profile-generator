// name id email
// getName getId getEmail getRole-returns Employee by defaulr

class Employee {
    constructor(name, id, email, role = 'Employee'){
        this.name = name
        this.id = id
        this.email = email
    }
}