import fs from "fs";

function getEmployeeData() {
  const employees = [];
  try {
    const fileData = fs.readFileSync("employees.txt", "utf-8");
    const jsonData = fileData.trim().split("\n");

    jsonData.forEach((employeeStr) => {
      try {
        const employee = JSON.parse(employeeStr);
        employees.push(employee);
      } catch (error) {
        console.log(`Error parsing employee data: ${employeeStr}`);
      }
    });
  } catch (error) {
    console.log(`Error reading employee data file: ${error}`);
  }
  return employees;
}

export default getEmployeeData;
