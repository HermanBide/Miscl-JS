import addNewEmployee from "./addNewEmployee.js";
import readLine from "readline";

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
import viewEmployeeByEmail from "./viewEmployeeByEmail.js";
import viewEmployeeById from "./viewEmployeeById.js";
import viewEmployeeByName from "./viewEmployeeByName.js";
import viewEmployees from "./viewEmployees.js";


function displayUserMenu() {
  console.log("========================Main Menu=========================");
  console.log("1. To add an Employee");
  console.log("2. View Employee By Id ");
  console.log("3. View Employee by name");
  console.log("4. View Employee By Email");
  console.log("5. view all employees");
  console.log("6. press to exit");
}

function main() {
  displayUserMenu();
  rl.question("Please enter the choice from above menu !", (choice) => {
    switch (choice) {
      case "1":
        addNewEmployee(rl, displayUserMenu);
        break;
      case "2":
        viewEmployeeById(rl, displayUserMenu);
        break;
      case "3":
        viewEmployeeByName(rl, displayUserMenu);
        break;
      case "4":
        viewEmployeeByEmail(rl, displayUserMenu);
        break;
      case "5":
        viewEmployees(rl, displayUserMenu);
        break;
      case "6":
        console.log("exiting ....");
        rl.close();
        break;
      default:
        console.log("Invalid choice. Please try again.");
        displayUserMenu();
        break;
    }
  });
}

main();

