import fs from 'fs';

export default function viewEmployeeById(data, rl, displayUserMenu) {
    fs.readFile("employees.txt",)
    rl.question("Enter ID of employee: ", (id) => {
      const employee = data.find((e) => e.id === id);
      if (employee) {
        console.log(
          `ID: ${employee.displayId()}, Full Name: ${employee.displayName()}, Age: ${employee.displayAge()}, Contact: ${employee.displayContact()}, Email: ${employee.displayEmail()}`
        );
      } else {
        console.log("could not find Employee with this id.");
      }
      displayUserMenu();
    });
  }