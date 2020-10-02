// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}                                

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var length = prompt ("how long would you want the password to be - more than 8 and less than 128");

var lowerCase = confirm ("Do you want lowercase letters?");
var upperCase = confirm  ("Do you want upperCase letters?"); 
var numeric = confirm  ("Do you want numeric letters?");
var specialChar = confirm  ("Do you want special characters?");

// var validate = (8 >= "length" <= 128);
// console.log (validate)

// function () {
// prompt ("here is your new password",
// Math.random().toString(36).slice(2) +
// Math.random().toString(36).slice(2)
// );
// }

// alert password = mathFllor.MathRandom ().upperCase.lowerCase.numeric.specialChar);
