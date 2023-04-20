
/**
 *  check of a string is valid string in general retuns true or false based on the string
 * @param {*} string
 */
function isValidString(string) {
  return typeof string === "string" ? string : false;
}

function isValidName(name) {
  // rules for a valid string along with validation return true or false based on that
  const regEx = /^[a-zA-Z]+ [a-zA-Z]+$/
  return regEx.test(name)

}

function isValidAge(age) {
  const regex = /^(1[89]|[2-9]\d)$/;
  return regex.test(age);
}

function isValidContact(contact) {
  return /^\d{3}-\d{3}-\d{4}$/.test(contact);
}

function isValidEmail(email) {
  const regex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*\.(com)$/;
  return regex.test(email);
}

export default { isValidString, isValidAge, isValidName, isValidEmail, isValidContact};
