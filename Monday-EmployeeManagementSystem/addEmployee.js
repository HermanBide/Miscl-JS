import Employee from "./Model/employee.js";
// import { isValidAge, isValidName, isValidEmail, isValidContact } from './Utils/Validation.js';
// import * as url from 'url';
// import { join as pathJoin } from 'path';

//CREATE DIR & TXT TO STORE INPUT DATA AND RETURN
// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = url.fileURLToPath(new URL('..', import.meta.url));

// const employeesPath = pathJoin(__dirname, 'employees.txt');

// export async function getFiles() {
//     try {
//         const files = await readdir(employeesPath);
//         return files.sort();
//     } catch (err) {
//         if (err.code === 'ENOENT') {
//             await mkdir(employeesPath);
//             return [];
//         } else {
//             throw err;
//         }
//     }
// }

// export async function getFile(filename) {
//     return await readFile(pathJoin(employeesPath, filename), {
//         encoding: 'utf8'
//     });
// }

// export async function writeFile(filename, content) {
//     await writeFile(pathJoin(employeesPath, `${filename}.txt`), content);
// }

// export async function deleteFile(filename) {
//     await unlink(pathJoin(employeesPath, `${filename}.txt`));
// }

// export async function reset() {
//     try {
//         await access(employeesPath, fsConstants.W_OK);
//         await Promise.all((await readdir(employeesPath)).map(filename => deleteFile(filename)));
//     } catch (err) {
//         if (err.code !== 'ENOENT') {
//             throw err;
//         }
//     }
//     await mkdir(employeesPath);
// }

//#############################################
//#############################################
//#############################################



function isValidName(name) {
  // rules for a valid string along with validation return true or false based on that
  const regEx = /^[a-zA-Z]+ [a-zA-Z]+$/;
  return regEx.test(name);
}

function isValidAge(age) {
  const regex = /^(1[89]|[2-9]\d)$/;
  return regex.test(age);
}

function isValidContact(contact) {
  const regex = /^\d{3}-\d{3}-\d{4}$/;
  return regex.test(contact);
}

function isValidEmail(email) {
  const regex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*\.(com)$/;
  return regex.test(email);
}

function addEmployee(data, rl, displayUserMenu) {

  function* IDGenerator() {
    let id = 1;
    while (true) {
      yield id++;
    }
  }
  
  const ids = IDGenerator();
  const id = ids.next().value.toString();

  rl.question("Enter employee's name: ", (name) => {
    if (!isValidName(name)) {
      console.log("Invalid name. Please use only valid strings.");
      displayUserMenu();
      return;
    }

    data.name

    rl.question("Enter employee's age: ", (age) => {
      if (!isValidAge(age)) {
        console.log("Invalid age. Please enter a number between 18 and 99.");
        rl.close();
        displayUserMenu();
        return;
      }
      data.age

      rl.question("Enter  employee's contact: ", (contact) => {
        if (!isValidContact(contact)) {
          console.log("Invalid contact. Please enter a number between");
          rl.close();
          displayUserMenu();
          return;
        }

        data.contact

        rl.question("Enter  employee's email: ", (email) => {
          if (!isValidEmail(email)) {
            console.log(
              "Invalid email. Please ensure it contains the '@' symbol and ends with '.com'."
            );
            rl.close();
            displayUserMenu();
            return;
          }

          data.email

          const newEmployee = new Employee(id, fullName, age, contact, email);
          newEmployee.save()
          rl.close();

          console.log(`Employee with ID ${id} has been added.`);
          displayUserMenu();
        });
      });
    });
  });
}

export default addEmployee;
