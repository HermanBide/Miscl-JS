import getEmployeeData from "./getEmployeeData.js";

export default function viewAllEmployees(displayUserMenu) {
  const employees = getEmployeeData()
    if (employees.length === 0) {
      console.log("No employees found.");
      return null;
    } else {
      console.log("\nAll Employees:");
      employees.forEach((employee) => {
        console.log(
          `ID: ${employee.id}, Full Name: ${employee.name}, Age: ${employee.age}, Contact: ${employee.contact}, Email: ${employee.email}`
        );
      });
    }
    displayUserMenu();
  }
