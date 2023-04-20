import getEmployeeData from "./getEmployeeData.js";

export default function viewEmployeeByEmail(rl, displayUserMenu) {
  const employees = getEmployeeData();
  rl.question("Enter employee email: ", (email) => {
    const employee = employees.find((e) => e.email.toLowerCase() === email.toLowerCase());
    if (employee) {
      console.log(
        `ID: ${employee.id}, Full Name: ${employee.name}, Age: ${employee.age}, Contact: ${employee.contact}, Email: ${employee.email}`
      );
    } else {
      console.log("Employee not found.");
    }
    displayUserMenu();
  });
}
