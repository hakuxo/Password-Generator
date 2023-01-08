// Arrays for each type of choice 

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "="];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Variables for later :)

var numberOfCharacters = "";
var passwordComponents = [];
var newPassword = "";
var count = 0;



// How long would the user like for their password to be? (includes error messages)

function getNumofChar() {
  numberOfCharacters = prompt ("How many characters would you like your password to be?");
  if (numberOfCharacters < 8 || numberOfCharacters > 128){
       alert("Length must be 8-128.")
       getNumofChar();
     }
  if (isNaN(numberOfCharacters)) {
    alert("A number must be used.")
    getNumofChar();
  }
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return numberOfCharacters
  }
}
// Does the user want numbers in their password?

function getNum() {
  var useNum = "Would you like numbers?\n Click OK for Yes\n Click Cancel for No."
  if (confirm(useNum)) {
    passwordComponents = passwordComponents.concat(numbers) 
    } else {
      count += 1;
    }
  }


// Does the user want lowercase letters in their password?

function getLower() {
  var lowerLetters = "Would you like lowercase letters?\n Click OK for yes\n Click Cancel for No."
  if (confirm(lowerLetters)) {
    passwordComponents = passwordComponents.concat(lowercase)
  } else {
    count += 1;
  }
}

// Does the user want uppercase letters in their password?

function getUpper() {
  var upperLetters = "Would you like uppercase letters?\n Click OK for yes\n Click Cancel for No"
  if(confirm(upperLetters)) {
    passwordComponents = passwordComponents.concat(uppercase)
  } else {
    count += 1;
  }
}
//Does the user want symbols in their password?

function getSymb() {
  var symB = "Would you like symbols/special characters?\n Click OK for yes\n Click Cancel for No"
  if(confirm(symB)) {
    passwordComponents = passwordComponents.concat(symbols)
  } else {
    count += 1;
  }
}
// A for loop for the users choice of types and amount of characters

function randomizeNum() {
  for (var i = 0; i < numberOfCharacters; i++) {
    var random = Math.floor(Math.random() * passwordComponents.length)
    newPassword = newPassword.concat(passwordComponents[random])
  }
  return newPassword;
}

// Function used to generate other function in order

function generatePassword() {
  newPassword = "";
  count = 0;
  getNumofChar();
  getNum();
  getLower();
  getUpper();
  getSymb();
if (count < 4) {
  randomizeNum();
 } else {
  alert("You must select at least one")
  numberOfCharacters = "";
  passwordComponents = [];
  count = 0;
  generatePassword();
 }
  passwordComponents = [];
  return newPassword;
}

//  Referencing the generate element

var generateBtn = document.querySelector("#generate");

// Writes password to the password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Event listener

generateBtn.addEventListener("click",writePassword);





 













