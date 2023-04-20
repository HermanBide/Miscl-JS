import getEmployeeData from './getEmployeeData.js';

export default function viewEmployeeByName( rl, displayUserMenu) {
  const employees = getEmployeeData()
    rl.question("Enter employee name: ", (name) => {
      const employee = employees.find((e) => e.name.toLowerCase() === name.toLowerCase()
      );
      if (employee) {
        console.log(`Found Employee: ${employee.name}`)
        console.log(
          `ID: ${employee.id}, Full Name: ${employee.name}, Age: ${employee.age}, Contact: ${employee.contact}, Email: ${employee.email}`
        );
      } else {
        console.log("could not find Employee.");
      }
      displayUserMenu();
    });
  }

