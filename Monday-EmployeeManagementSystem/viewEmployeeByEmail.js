export default function viewEmployeeByEmail(data, rl, displayUserMenu) {
    rl.question("Enter employee email: ", (email) => {
      const employee = data.filter(
        (e) => e.getEmail().toLowerCase() === email.toLowerCase()
      );
      if (employee) {
        console.log(
          `ID: ${employee.getId()}, Full Name: ${employee.getFullName()}, Age: ${employee.getAge()}, Contact: ${employee.getContact()}, Email: ${employee.getEmail()}`
        );
      } else {
        console.log("Employee not found.");
      }
      displayUserMenu();
    });
  }
