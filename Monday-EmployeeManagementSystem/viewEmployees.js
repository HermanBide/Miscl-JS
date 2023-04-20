export default function viewAllEmployees(data, displayUserMenu) {
    if (data.length === 0) {
      console.log("No employees found.");
      return null;
    } else {
      console.log("\nAll Employees:");
      data.forEach((employee) => {
        console.log(
          `ID: ${employee.displayId()}, Full Name: ${employee.displayName()}, Age: ${employee.displayAge()}, Contact: ${employee.displayContact()}, Email: ${employee.displayEmail()}`
        );
      });
    }
    displayUserMenu();
  }
