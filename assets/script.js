// Assignment code here
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "="];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var pikachu = [];
var numberOfCharacters;
var password = getPasswordInfo();

var generateBtn = document.querySelector("#generate");


// When button is pressed it shows in the console 
function generatePassword() {
  console.log("Hello, the button has been pressed");
  getUserInput();
  var password;

 function getUserInput() {

numberOfCharacters = window.prompt("Select the number of characters for your password.");
// function generatePassword() 
//   for (i = 0; < numbers; i++) {
//     var index = Math.floor.parseInt(math.random() * numbers.length);

// return String.numberOfCharacters(Math.floor(Math.random() * 35) + 55);
//   }
//  }
// Get references to the #generate element
 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 
}
console.log(password)
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
}
