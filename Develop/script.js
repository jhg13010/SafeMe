// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector(".btn");

// Write password to the #password input
var writePassword = function() {
  debugger;
  //ask for password length 
  var length =  window.prompt("How long does your password need to be? Please choose a number between 8 and 128.");
    while (isNaN(length)) {
    }
  console.log(length)
  //ask for character types 
  var lower = window.prompt("Do you want lowercase characters? YES or NO");
    if (lower === "YES" || lower === "yes") {
      console.log("include lower");
    } else if (lower === "NO" || lower === "no") {
      console.log("don't include lower");
    } else {
      window.prompt("Please enter a valid response: YES or NO");
    };

  var upper = window.prompt("Do you want uppercase characters? YES or NO");
    if (upper === "YES" || upper === "yes") {
      console.log("include upper");
    } else if (upper === "NO" || upper === "no") {
      console.log("don't include upper");
    } else {
      window.prompt("Please enter a valid response: YES or NO");
    };

  var numeric = window.prompt("Do you want numeic characeters? YES or NO");
    if (numeric === "YES" || numeric === "yes") {
      console.log("include numeric");
    } else if (numeric === "NO" || numeric === "no") {
      console.log("don't include numeric");
    } else {
      window.prompt("Please enter a valid response: YES or NO");
    };

  var special = window.prompt("Do you want special characters? YES or NO");
    if (special === "YES" || special === "yes") {
      console.log("include special");
    } else if (special === "NO" || special === "no") {
      console.log("don't include special");
    } else {
      window.prompt("Please enter a valid response: YES or NO");
    };

    var pwInfo = [lower, upper, numeric, special];
    console.log(pwInfo);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;

var setup = [
  {

  }
]