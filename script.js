
// Assignment Code

var generateBtn = document.querySelector("#generate");

// created variable lowerCase to store an array of lowercase characters.
var lowerCaseChar = ("abcdefghijklmnopqrstuvwxyz".split(''));
console.log (lowerCaseChar);

// created variable upperCase to store an array of uppercase charaters.
var upperCaseChar = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));
console.log (upperCaseChar);

// created variable lnumeric to store an array of all the numbers.
var numericChar = ('0123456789'.split(''));
console.log (numericChar);

// created varibale special to store an array of special.
var specialChar = (' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~'.split(''));
console.log (specialChar);

function generatePassword() {
  var passArray = [];

  // welcome message alert.
  alert ("Welcome to the Password Generator. Please click on Generate Password to get started")
  // 
  // created variable length to store the prompt asking for length of the password.
  var length = prompt ("How many characters would you like for your password, please Choose between 8 and 128");

  // if statment to check the length is more than 8 and less than 128.
  if (length >= 8 && length <= 128) {
    alert ("You choose " + length + " characters for your password. let's select your password criteria now ");
    // once the length is true, following confirm happens to ask for criteria.
    var lowerCase = confirm  ("Do you want lowercase characters in your password?");
    var upperCase = confirm  ("Do you want Uppercase characters in your password?");
    var numeric = confirm  ("Do you want Numeric characters in your password?");
    var special = confirm  ("Do you want special characters in your password?");
  }
  else {
  alert (" Not a valid selection. Please try again.");
  return;
  }

  // if lower case is true, than array of lowerCase gets ADDED to the passward array variable.
  if (lowerCase) {
    passArray = passArray.concat(lowerCaseChar);
     // Display in console
    console.log (passArray);
  }
  
  // if upper case is true, than array of uppercase gets ADDED to the passward array variable. 
  if (upperCase) {
    passArray = passArray.concat(upperCaseChar);
    
    // Display in console
    console.log (passArray);
  }
  
  // if numeric is true, than array of numeric gets ADDED to the passward array variable.
  if (numeric) {
    passArray = passArray.concat(numericChar);
    // Display in console
    console.log (passArray);
  }
  
  // if special is true, than array of numeric gets ADDED to the passward array variable.
  if (special){  
  passArray = passArray.concat(specialChar);
  // Display in console
  console.log (passArray);
  }

  var newPassword = "";

// Generate a random number
  for (var i = 0; i < length; i++) {
    newPassword = newPassword + passArray [Math.floor(Math.random() * passArray.length)]
  }

  console.log (newPassword)
  return newPassword;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)