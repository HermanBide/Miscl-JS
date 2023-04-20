import Employee from "./Model/Employee.js";


function isValidName(name) {
  // rules for a valid string along with validation return true or false based on that
  const regEx = /^[a-zA-Z]+ [a-zA-Z]+$/;
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

function addNewEmployee(data, rl, displayUserMenu) {

  function* IDGenerator() {
    let id = 1;
    while (true) {
      yield id++;
    }
  }
  
  const ids = IDGenerator();
  const id = ids.next().value.toString();

  rl.question("Enter employee's name: ", (name) => {
    if (!isValidName(name)) {
      console.log("Invalid name. Please use only valid strings.");
      rl.close()
      displayUserMenu();
      return;
    }

    data.push(name)

    rl.question("Enter employee's age: ", (age) => {
      if (!isValidAge(age)) {
        console.log("Invalid age. Please enter a number between 18 and 99.");
        rl.close();
        displayUserMenu();
        return;
      }
      data.age

      rl.question("Enter  employee's contact: ", (contact) => {
        if (!isValidContact(contact)) {
          console.log("Invalid contact. Please enter a number between");
          rl.close();
          displayUserMenu();
          return;
        }

        data.contact

        rl.question("Enter  employee's email: ", (email) => {
          if (!isValidEmail(email)) {
            console.log(
              "Invalid email. Please ensure it contains the '@' symbol and ends with '.com'."
            );
            rl.close();
            displayUserMenu();
            return;
          }

          data.email

          const newEmployee = new Employee(id, name, age, contact, email);
          newEmployee.save()
          data.push(newEmployee);
          rl.close();

          console.log(`Employee with ID ${id} has been added.`);
          displayUserMenu();
        });
      });
    });
  });
}

export default addNewEmployee;

// module.export = {addNewEmployee};