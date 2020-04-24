
// To prompt the user to input ONLY an integral number between 8 and 128.
var userLength = prompt ("Choose your password length between 8 and 128.");

while (Number.isInteger(Number(userLength)) === false || userLength < 8 || userLength > 128){
  alert ("Hey! You need to enter an integral number between 8 and 128!");
  userLength = prompt ("Choose your password length between 8 and 128.");
};

console.log("Password Length is integral: " + Number.isInteger(Number(userLength)));
console.log("Password Length: " + userLength);


// To prompt the user to choose at least one of the character options.
var userLower = confirm ("Would you like to include lower cases?");
var userUpper = confirm ("Would you like to include upper cases?");
var userNumber = confirm ("Would you like to include numbers?");
var userSpecial = confirm ("Would you like to include special characters?");

while (userLower===false && userUpper===false && userNumber===false && userSpecial===false){
  alert ("Listen! You need to choose at least one of the options to include in your password!");
  userLower = confirm ("Would you like to include lower cases?");
  userUpper = confirm ("Would you like to include upper cases?");
  userNumber = confirm ("Would you like to include numbers?");
  userSpecial = confirm ("Would you like to include special characters?");
}

console.log("Lower Case: " + userLower + ";   " + "Upper Case: " + userUpper + ";   " + "Numbers: " + userNumber + ";   " + "Special Characters: " + userSpecial + ";   ");


// To create a pool of password characters based on user's choice.
var passwordPool = "";
if (userLower){
  passwordPool += "abcdefghijklmnopqrstuvwxyz";
}
if (userUpper){
  passwordPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
if (userNumber){
  passwordPool += "0123456789";
}
if (userSpecial){
  passwordPool += " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
}

console.log("Password pool includes: " + passwordPool);


// Using generatePassword() function to return a value to writePassword();
function generatePassword(){
  var userPassword = "";
  for (var i=0 ; i < userLength; i++){
    var num = Math.floor(Math.random() * passwordPool.length);
    userPassword += passwordPool.charAt(num);
  };
  console.log(userPassword);
  return userPassword;
}




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
