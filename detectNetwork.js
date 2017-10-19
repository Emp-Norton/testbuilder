// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  var leadingNums = cardNumber.slice(0, 2);
  var amexPrefixes = ["34", "37"];
  var dinerPrefixes = ["38", "39"];
  var visaPrefixes = ["4"];
  var visaLengths = [13, 16, 19];
  var masterPrefixes = ["51", "52", "53", "54", "55"];

  if (amexPrefixes.includes(leadingNums)){
  	if (cardNumber.length === 15) return "American Express"
  }
  if (dinerPrefixes.includes(leadingNums)){
  	if (cardNumber.length === 14) return "Diner's Club"
  }
  if (visaPrefixes.includes(leadingNums[0])){
  	if (visaLengths.includes(cardNumber.length)) return "Visa"
  }
  if (masterPrefixes.includes(leadingNums)){
  	if (cardNumber.length === 16) return "MasterCard"
  }
};


