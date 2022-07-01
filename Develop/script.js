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
  var pwInfo = [lowercase, uppercase, numeric, special];
  
  var decision = function() {}
    for( var i=0; i < pwInfo.length; i++) {
      var pwInfoObj = pwInfo[i];
      pwInfoObj = window.prompt("Do you want" + pwInfoObj + "characters? YES or NO");
      if (pwInfoObj === "YES" || pwInfoObj === "yes") {
        console.log("include" + pwInfoObj);
      } else if (pwInfoObj === "NO" || pwInfoObj === "no") {
        console.log("don't include" + pwInfoObj);
      } else {
        window.prompt("Please enter a valid response: YES or NO");
      };
  }



  var lowercase = window.prompt("Do you want" + lowercase + "characters? YES or NO");
    if (lowercase === "YES" || lowercase === "yes") {
      console.log("include lowercase");
    } else if (lowercase === "NO" || lowercase === "no") {
      console.log("don't include lowercase");
    } else {
      window.prompt("Please enter a valid response: YES or NO");
    };

  var uppercase = window.prompt("Do you want uppercase characters? YES or NO");
    if (uppercase === "YES" || uppercase === "yes") {
      console.log("include uppercase");
    } else if (uppercase === "NO" || uppercase === "no") {
      console.log("don't include uppercase");
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