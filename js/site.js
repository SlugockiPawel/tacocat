// handle button click
// controller function
function handleBtnClick() {
  // make sure alert message is invisible
  resetAlertBox();

  const userInput = getUserInput();

  const processedPhrase = processUserInput(userInput);

  prepareAlertBox(processedPhrase);

  showAlertBox();
}

// logic functions
function getUserInput() {
  return (userInput = document.getElementById("userString").value);
}

function processUserInput(input) {
  const userString = input.toLowerCase();
  const regEx = /[^a-z0-9]/gi;

  return userString.replace(regEx, "");
}

function isPalindrome(phrase) {
  return reverseStr(phrase) === phrase;
}

function reverseStr(inputStr) {
  let revStr = "";
  for (let i = inputStr.length - 1; i >= 0; i--) {
    revStr += inputStr[i];
  }

  return revStr;
}

function prepareAlertBox(phrase) {
  const alertBox = document.getElementById("alert");
  const alertHeader = document.getElementById("alertHeader");
  const alertMsg = document.getElementById("alertMsg");

  let header = '';
  const msg = `Your phrase reversed is: ${reverseStr(phrase)}`;
  let alertColorClass = '';

  if (isPalindrome(phrase)) {
    header = "Well Done! You have entered a palindrome!";
    alertColorClass = 'alert-success';
  } else {
    header = "Sorry! You did not enter a palindrome!";  
    alertColorClass = 'alert-danger';
  }

  alertHeader.innerText = header;
  alertMsg.innerText = msg;
  alertBox.classList.add(alertColorClass);
}

// view functions
function resetAlertBox() {
  const alertBox = document.getElementById("alert");
  alertBox.classList.add("invisible");
  alertBox.classList.remove("alert-success", "alert-danger");
}

function showAlertBox() {
  const alertBox = document.getElementById("alert");
  alertBox.classList.remove("invisible");
}
