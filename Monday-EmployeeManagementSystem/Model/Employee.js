import fs from "fs"
export default class Employee {
  constructor(id, name, age, contact, email) {
    this._id = parseInt(id);
    this._name = name;
    this._age = parseInt(age);
    this._contact = contact;
    this._email = email;
  }

  //call save method to save new employee in constant variable named data
  save() {
    const data = JSON.stringify({
      id: this._id,
      name: this._name,
      age: this._age,
      contact: this._contact,
      email: this._email
    })
    //using fs module to retrieve data from the employees.txt file
    fs.appendFile("employees.txt", data, "utf8", (err) => {
      if(err) {
        console.log("Error saving employee data", err)
      } else {
        console.log(`Employee added: ID=${this.id}, Name=${this.name}, Age=${this.age}, Contact=${this.contact}, Email=${this.email}`)
      }
    });
  }

  displayId() {
    return `${this._id}`;
  }
  displayName() {
    return `${this._name}`;
  }
  displayAge() {
    return `${this._age}`;
  }
  displayContact() {
    return `${this._contact}`;
  }
  displayEmail() {
    return `${this._email}`;
  }
}

// const data = []
// const employee = new Employee(3, "Jimmy jam", 20, "Jhenccey@example.com", "925-333-7534");
// employee.save()
// data.push(employee)
// console.log(data)