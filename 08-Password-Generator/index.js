const generatePassword = () => {
  const length = parseInt(document.getElementById("password-length").value); //initially value of length is 6
  // console.log(length);

  const includeLowercase = document.getElementById("include-lowercase").checked; // initially true
  // console.log(includeLowercase);

  const includeUppercase = document.getElementById("include-uppercase").checked; // initially false
  // console.log(includeUppercase);

  const includeNumbers = document.getElementById("include-numbers").checked; //initially false
  // console.log(includeNumbers);

  const includeSymbols = document.getElementById("include-symbols").checked; //initially false
  // console.log(includeSymbols);

  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let allCharacters = "";
  if (includeLowercase) allCharacters += lowercase;
  if (includeUppercase) allCharacters += uppercase;
  if (includeNumbers) allCharacters += numbers;
  if (includeSymbols) allCharacters += symbols;

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }

  document.getElementById("password-output").value = password;
};

document
  .getElementById("generate-btn")
  .addEventListener("click", generatePassword);

document.getElementById('copy-btn').addEventListener('click',copyToClipboard);

async function copyToClipboard() {
  const passwordOutput = document.getElementById('password-output').value;
  passwordOutput.select();
  passwordOutput.setSelectionRange(0, 9);
  try {
    await navigator.clipboard.writeText(passwordOutput);
    alert('Password copied to clipboard');
  } catch (err) {
    console.error('Failed to copy text: ',err);
  }
}

function updateLengthValue() {
  const length = document.getElementById("password-length").value;
  document.getElementById("length-value").textContent = length;
}

document.getElementById('password-length').addEventListener('input',updateLengthValue);