
export default function viewEmployeeByName(data, rl, displayUserMenu) {
    rl.question("Enter employee name: ", (name) => {
      const employeeName = data.filter((employee) => employee.displayName().toLowerCase() === name.toLowerCase()
      );
      if (employeeName.length > 0) {
        console.log(`Found Employee: ${employeeName}`)
        console.log(
          `ID: ${employeeName.displayId()}, Full Name: ${employeeName.displayName()}, Age: ${employeeName.displayAge()}, Contact: ${employeeName.displayContact()}, Email: ${employeeName.displayEmail()}`
        );
      } else {
        console.log("could not find Employee.");
      }
      displayUserMenu();
    });
  }

