const displayPassword = document.querySelector("#display-password");
const passwordLength = document.querySelector("#length");
const includeLowercase = document.querySelector("#include-lowercase");
const includeSymbol = document.querySelector("#include-symbol");
const includeUppercase = document.querySelector("#include-uppercase");
const includeNumber = document.querySelector("#include-number");
const generatePassword = document.querySelector("#generate-password");
const copyPassword = document.querySelector(".fa-copy");

const lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
const uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberSet = "1234567890";
const symbolSet = `/*&$#@?)(~_-]{+-`;

const generaterandomData = (randomdataset) => {
  return randomdataset[Math.floor(Math.random() * randomdataset.length)];
};

const generaterandomPassword = (password = " ") => {
  if (includeUppercase.checked) {
    password += generaterandomData(uppercaseSet);
  }

  if (includeLowercase.checked) {
    password += generaterandomData(lowercaseSet);
  }

  if (includeSymbol.checked) {
    password += generaterandomData(symbolSet);
  }

  if (includeNumber.checked) {
    password += generaterandomData(numberSet);
  }

  if (password.length < passwordLength.value) {
    return generaterandomPassword(password);
  }

  copyPassword.addEventListener("click", () => {
    setTimeout(() => {
      copyPassword.classList.add("fa-copy-color");
    }, 500);

    navigator.clipboard.writeText(password);
  });

  displayPassword.innerHTML = truncateString(password, passwordLength.value);
};

generatePassword.addEventListener("click", () => {
  generatePassword.innerHTML = "Generating.....";
copyPassword.classList.remove("fa-copy-color")

  setTimeout(()=>{
generatePassword.innerHTML ="Generate Password"
generaterandomPassword();
  },1000);

 
 


});

function truncateString(str, maxLength) {
  // Check if the length of the string is greater than the specified maxLength
  if (str.length > maxLength) {
    return str.substring(0, maxLength);
  } else {
    return str;
  }
}
