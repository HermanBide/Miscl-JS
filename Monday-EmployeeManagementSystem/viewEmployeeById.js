import readEmployeesFile from './readEmployeesFile.js';

export default function viewEmployeeById(rl, displayUserMenu) {
  readEmployeesFile((err, data) => {
    if (err) {
      console.log("Error reading employees file:", err);
      return null
    }
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
  });
  }