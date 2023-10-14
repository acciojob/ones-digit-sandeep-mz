function onesDigit(n) {
  // your code here
	 if (Number.isInteger(number) && number > 0) {
    return number % 10; // Using the modulo operator to get the ones digit
  } else {
    throw new Error("Input must be a positive integer.");
  }
}

// Do not change the code below

const n = prompt("Enter Number:");
alert(onesDigit(n));
