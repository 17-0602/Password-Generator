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

function generatePassword() {
  const upperAlpha = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  const lowerAlpha = "abcdefghijklmnñopqrstuvwxyz";
  const number = "0123456789";
  const symbols = "!#$%&/=?¡*_:;,.-+¿<>"
  let generatedPassword = '';
  var draft = '';

  window.alert("Choose the criteria to generate a password.");

  let pwLength = parseInt(prompt("Define password length (between 8 and 128 characters)."));

  if (pwLength >=8 && pwLength <= 128) {

    draft += confirm("Do you want to include lower case characters?") ? lowerAlpha : ''
    draft += confirm("Do you want to include UPPER case characters?") ? upperAlpha : '';
    draft += confirm("Do you want to include numbers?") ? number : '';
    draft += confirm("Do you want to include symbols?") ? symbols : '';

    if (draft === '') {
      if (confirm("Choose at least one option")) {
        writePassword();
      } else {
        window.alert ("Bye");
      }
    }

    for (i = 0; i < pwLength; i++) {
      generatedPassword += draft[Math.floor(Math.random() + draft.length)];
    }
  } else {
    window.alert("Choose a valid number.");

    if (chooseAgain = confirm("Do you want to try again?")) {
      writePassword();
    } else {
      window.alert("Bye")
    }
  }
  return generatedPassword;
}
  
    /* This was my attempt before I asked for help

    let uppConfirm = window.confirm ("Do you want to include UPPER case characters?");
    let numConfirm = window.confirm ("Do you want to include numbers?");
    let symbolConfirm = window.confirm ("Do you want to include symbols?");

    if (lowConfirm || uppConfirm || numConfirm || symbolConfirm) {
      for (let i = 0; i < pwLength; i++) {
        let rndmAssign = Math.floor(Math.random() * 4);

        if (rndmAssign == 0 && lowConfirm) {
          console.log(`rndmAssign: ${rndmAssign} = lc`);
          let rndmLowerCase =
            lowerAlpha[Math.floor(Math.random() * lowerAlpha.length)];
            console.log(`rndmLowerCase: ${rndmLowerCase}`);
            passW = passW + rndmLowerCase;
        }

        else if (rndmAssign == 1 && uppConfirm) {
          console.log(`rndmAssign: ${rndmAssign} = uc`);
          let rndmUpperCase =
            upperAlpha[Math.floor(Math.random() * upperAlpha.length)];
            console.log(`rndmUpperCase: ${rndmUpperCase}`);
            passW = passW + rndmUpperCase;
        }

        else if (rndmAssign == 2 && numConfirm) {
          console.log(`rndmAssign: ${rndmAssign} = num`);
          let rndmNumber =
            number[Math.floor(Math.random() * number.length)];
            console.log(`rndmNumber: ${rndmNumber}`);
            passW = passW + rndmNumber;
        }

        else if (rndmAssign == 3 && symbols) {
          console.log(`rndmAssign: ${rndmAssign} = spec`);
          let rndmSymbol =
            symbols[Math.floor(Math.random() * symbols.length)];
            console.log(`rndmSymbol: ${rndmSymbol}`);
            passW = passW + rndmSymbol;
        }        
      }     
    }*/
 
/*
for (i = 0; i < pwLength; i++){
  generatePassword += draft[Math.floor(Math.random() + draft.length)]
}*/