import Employee from "./Model/Employee.js";
import fs from "fs"
import { v4 as uuidv4 } from 'uuid';

function isValidName(name) {
  const regEx = /^[a-zA-Z ]+$/;
  return regEx.test(name);
}

function isValidAge(age) {
  const regex = /^(1[89]|[2-9]\d)$/;
  return regex.test(age);
}

function isValidContact(contact) {
  const regex = /^\d{3}-\d{3}-\d{4}$/;
  return regex.test(contact);
}

function isValidEmail(email) {
  const regex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*\.(com)$/;
  return regex.test(email);
}

function addNewEmployee( rl, displayUserMenu) {
// data Object to store input data  
const dataObject = {};
  
  const id = uuidv4();
  dataObject.id = id;

  rl.question("Enter employee's name: ", (name) => {
    dataObject.name = name 

    if (!isValidName(name)) {
      console.log("Invalid name string. Please use only valid strings.");
      rl.close()
      displayUserMenu();
      return;
    }

    rl.question("Enter employee's age: ", (age) => {
      dataObject.age = age

      if (!isValidAge(age)) {
        console.log("Invalid age. Please enter a number between 18 and 99.");
        rl.close();
        displayUserMenu();
        return;
      }

      rl.question("Enter  employee's contact: ", (contact) => {
        dataObject.contact = contact
        if (!isValidContact(contact)) {
          console.log("Invalid contact. Please enter a number between");
          rl.close();
          displayUserMenu();
          return;
        }

        rl.question("Enter  employee's email: ", (email) => {
          dataObject.email = email
          if (!isValidEmail(email)) {
            console.log(
              "Invalid email. Please ensure it contains the '@' symbol and ends with '.com'."
            );
            rl.close();
            displayUserMenu();
            return;
          }

          const newEmployee = new Employee(dataObject.id, dataObject.name, dataObject.age, dataObject.contact, dataObject.email);
          newEmployee.save() //save method from class to save employee in txt.file
          // const jsonData = JSON.stringify(dataObject);
          // fs.writeFileSync('employees.txt', jsonData);
          console.log(`Employee with ID ${id} has been added.`);
          displayUserMenu();
        });
      });
    });
  });
}

export default addNewEmployee;

