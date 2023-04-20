import Employee from "./Model/Employee.js";
import fs from "fs";
import addNewEmployee from "./addNewEmployee.js";
import readLine from "readline";
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// define the start point of the program

function displayUserMenu() {
  console.log("========================Main Menu=========================");
  console.log("1. To add an Employee");
  console.log("2. View Employee By Id ");
  console.log("3. View Employee By Email");
  console.log("4. View Employee by name");
  console.log("5. To add an Employee");
  console.log("6. press to exit");
}

const data = [];
const fileContent = fs.readFileSync("employees.txt", "utf-8");
const lines = fileContent.split("\n");
for (let line of lines) {
  if (line.trim() !== "") {
    const [id, name, age, email, contact] = line.split("|");
    const employee = new Employee(id, name, age, email, contact);
    data.push(employee);
  }
}

function main(data) {
  displayUserMenu();
  rl.question("Please enter the choice from above menu !", (choice) => {
    switch (choice) {
      case "1":
        addNewEmployee(rl, displayUserMenu);
        break;
      case "2":
        // Find the employee by ID
        rl.question(
          "Enter the ID of the employee you want to search for: ",
          (id) => {
              const employee = data.find((e) => e.displayId() === id);
              if (employee) {
                console.log(`Employee found return, Id: ${employee.id}`);
              } else {
                console.log("Employee not found.");
              }
              rl.close();
          }
        );
        break;
      case "3":
        // here call the add logic
        console.log("finding the employee by name");
        break;
      case "4":
        // here call the add logic
        console.log("finding the employee by email");
        break;
      case "5":
        // here call the add logic
        console.log("finding the employee by contact");
        break;
      case "6":
        // here call the add logic
        console.log("finding all employees");
        break;
      default:
        break;
    }
  });
};

main();
