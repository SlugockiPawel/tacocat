//handle button click
function handleBtnClick() {
  // make sure alert message is invisible
  hideAlertBox();

  // get user input
  const userInput = getUserInput();

  // prepare userInput
  const cleanedPhrase = prepareUserInput(userInput);
  let alertColor = "";

  if (isPalindrome(cleanedPhrase)) {
    const header = "Well Done! You have entered a palindrome!";
    const msg = `Your phrase reversed is: ${reverseStr(cleanedPhrase)}`;
    prepareAlertBox(header, msg, "success");
  } else {
    const header = "Sorry! You did not enter a palindrome!!";
    const msg = `Your phrase reversed is: ${reverseStr(cleanedPhrase)}`;
    prepareAlertBox(header, msg, "danger");
  }

  displayAlertBox();
}

// prepare input

// check if is palidrome

// display message

function hideAlertBox() {
  const alertBox = document.getElementById("alert");
  alertBox.classList.remove("alert-success", "alert-danger");
  alertBox.classList.add("invisible");
}

function displayAlertBox(color) {
  const alertBox = document.getElementById("alert");
  alertBox.classList.remove("invisible");
}

function getUserInput() {
  return (userInput = document.getElementById("userString").value);
}

function prepareUserInput(input) {
  const userString = input.toLowerCase();
  const regEx = /[^a-z0-9]/gi;

  return userString.replace(regEx, "");
}

function isPalindrome(phrase) {
  const reversed = reverseStr(phrase);

  return reversed === phrase;
}

function reverseStr(inputStr) {
  let revStr = "";
  for (let i = inputStr.length - 1; i >= 0; i--) {
    revStr += inputStr[i];
  }

  return revStr;
}

function prepareAlertBox(header, message, color) {
  const alertHeader = document.getElementById("alertHeader");
  const alertMsg = document.getElementById("alertMsg");
  const alertBox = document.getElementById("alert");
  
  alertBox.classList.add(`alert-${color}`);
  alertHeader.innerText = header;
  alertMsg.innerText = message;
}
