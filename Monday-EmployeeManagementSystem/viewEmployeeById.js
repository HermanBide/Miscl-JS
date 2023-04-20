
export default function viewEmployeeById(data, rl, displayUserMenu) {
    rl.question("Enter ID of employee: ", (id) => {
      const employee = data.find((e) => e.displayId() === id);
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