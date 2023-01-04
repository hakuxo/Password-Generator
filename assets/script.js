// Assignment code here
var generation = document.querySelector("#generate")

function generatePassword() {
  console.log("Hello, the button has been pressed");
// Prompting user for password

// Validating input

// Generates password

// Display password in box
// Generates in placeholder
  return "Generated password will go here"
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

