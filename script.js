// Assignment Code

var generateBtn = document.querySelector("#generate");

// created variable lowerCase to store an array of lowercase characters
var lowerCase = ('abcdefghijklmnopqrstuvwxyz'.split(''));
console.log (lowerCase);

// created variable upperCase to store an array of uppercase charaters
var upperCase = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));
console.log (upperCase);

// created variable lnumeric to store an array of all the numbers 
var numeric = ('0123456789'.split(''));
console.log (numeric);

// created varibale special to store an array of special
var special = ('!@#$%^&*()_+'.split(''));
console.log (special);

var passArray = [];

// welcome message alert 
alert ("Welcome to the Password Generator. Please click on Generate Password to get started")

// created variable length to store the prompt asking for length of the password
var length = prompt ("How many characters would you like for your password, please Choose between 8 and 128");
alert ("You choose " + length + " characters for your password. let's select the criteria now ");

// if statment to check the length is more than 8 and less than 128
if (length >= 8 && length <= 128) {
  lowerCase = confirm  ("Do you want lowercase characters in your password?");
  upperCase = confirm  ("Do you want Uppercase characters in your password?");
  numeric = confirm  ("Do you want Numeric characters in your password?");
  special = confirm  ("Do you want special characters in your password?");
}
else 
alert (" Not a valid selection. Please try again.")

// if lower case is true, than array of lowerCase gets ADDED to the passward array variable.
if (lowerCase) {
  passArray = passArray.concat(lowerCase);
   // Display in console
  console.log (passArray);
}
// if upper case is true, than array of uppercase gets ADDED to the passward array variable. 
if (upperCase) {
  passArray = passArray.concat(upperCase);

   // Display in console
  console.log (passArray);

}
// if numeric is true, than array of numeric gets ADDED to the passward array variable.
if (numeric) {
  passArray = passArray.concat(numeric);
  // Display in console
  console.log (passArray);

}
// if special is true, than array of numeric gets ADDED to the passward array variable.
if (special){  
passArray = passArray.concat(special);
console.log (passArray);

}

// Generate a random number
for (var i = 0; i < length; i++) {
   
  // Math.floor will round down, meaning we would get a number between 0 and 9, so we'll always add 1 to bump it up.
  var generatePassword =passArray + [Math.floor(Math.random() * length) + 1];

  // Display in console
  console.log(generatePassword);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
