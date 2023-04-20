import fs from "fs"
export default class Employee {
  constructor(id, name, age, email, contact) {
    this._id = id;
    this._name = name;
    this._age = parseInt(age);
    this._email = email;
    this._contact = contact;
  }

  save() {
    const data = JSON.stringify({
      id: this._id,
      name: this._name,
      age: this._age,
      contact: this._contact,
      email: this._email
    })

    fs.appendFile("employees.txt", data, "utf8", (err) => {
      if(err) {
        console.log("Error saving employee data", err)
      } else {
        console.log(`Employee added: ID=${this.id}, Name=${this.name}, Age=${this.age}, Email=${this.email}, Contact=${this.contact}`)
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