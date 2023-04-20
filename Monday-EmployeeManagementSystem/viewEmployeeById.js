import getEmployeeData from './getEmployeeData.js';

export default function viewEmployeeById(rl, displayUserMenu) {
  const employees = getEmployeeData()
    rl.question("Enter ID of employee: ", (id) => {
      const employee = employees.find((e) => e.id === parseInt(id));
      if (employee) {
        console.log( 
          `ID: ${employee.id}, Full Name: ${employee.name}, Age: ${employee.age}, Contact: ${employee.contact}, Email: ${employee.email}`
        );
      } else {
        console.log("could not find Employee with this id.");
      }
      displayUserMenu();
    });
  }