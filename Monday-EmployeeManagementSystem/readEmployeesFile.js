import fs from "fs"

export default function readEmployeesFile(callback) {
    fs.readFile("employees.txt", "utf-8", (err, data) => {
      if (err) {
        console.log("Error reading employees file:", err);
        return callback(err);
      }
      const employees = data
        .trim() // remove trailing newline
        .split("\n") // split into lines
        .map((line) => {
          const [id, fullName, age, contact, email] = line.split(",");
          return { id, fullName, age, contact, email };
        });
      callback(null, employees);
      // try {
      //   const employees = JSON.parse(data);
      //   callback(null, employees);
      // } catch (error) {
      //   console.log("Error parsing employees file:", error)
      //   callback(error);
      // }
    });
  }