import Employee from "./Model/Employee.js";
import fs from "fs";
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
// define the start point of the program

function displayUserMenu() {
  console.log("========================Main Menu=========================");
  console.log("1. To add an Employee");
  console.log("2. View Employee By Id ");
  console.log("3. View Employee By Email");
  console.log("4. View Employee by name");
  console.log("5. view all employees");
  console.log("6. press to exit");
}

// const data = {
//   id: "", name: "", age: "", contact: "", email: "",
// };
// const fileContent = fs.readFileSync("employees.txt", "utf-8");
// const lines = fileContent.split("\n");
// for (let line of lines) {
//   if (line.trim() !== "") {
//     const [id, name, age, email, contact] = line.split("|");
//     const employee = new Employee(id, name, age, email, contact);
//   }
// }

function main() {

  displayUserMenu();
  rl.question("Please enter the choice from above menu !", (choice) => {
    switch (choice) {
      case "1":
        addNewEmployee( rl, displayUserMenu);
        break;
      case "2":
        // Find the employee by ID
        viewEmployeeById( rl, displayUserMenu);
        break;
      case "3":
        // here call the add logic
        console.log("finding the employee by name");
        viewEmployeeByName( rl, displayUserMenu);
        break;
      case "4":
        // here call the add logic
        viewEmployeeByEmail( rl, displayUserMenu);
        console.log("finding the employee by email");
        break;
      case "5":
        // here call the add logic
        viewEmployees( rl, displayUserMenu)
        console.log("finding all employees");
        break;
      case "6":
        // here call the add logic
        console.log(exit)
        break;
      default:
        break;
    }
  });
};

main();


//create a helper method that gets the data from employees.txt 
//read then parse and get array of emplyee object 
