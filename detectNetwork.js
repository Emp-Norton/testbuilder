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
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  
  var leadingNums = cardNumber.slice(0, 4);
  var amexPrefixes = ["34", "37"];
  var dinerPrefixes = ["38", "39"];
  var visaPrefixes = ["4"];
  var masterPrefixes = ["51", "52", "53", "54", "55"];
  var maestroPrefixes = ["5018", "5020", "5038", "6304"]
  var discoverPrefixes = ["6011", "644", "645", "646", "647", "648", "649", "65"]

  // Refactor going one digit at a time, minimizing the potential network pool each time. 
  // I.e. if the first num is "6", it can only be Discover or Maestro, "3" can only be 
  // Amex / Diner, then do the same with length. Could have an issue with edge-cases like
  // "6012", which would (erroneously) work in the proposed implementation but not the current one. 
  // Also make a checkPrefixes function; stupid to repeat all that language in the switch case. 
  		// related: look up procs/lambdas in JS. 

  // this switch statement is a mess. Seriously reconsider this. 
  switch (cardNumber.length){
  	case 12:
  	  if (maestroPrefixes.includes(leadingNums)) return "Maestro"
  	  break
  	case 13:
  	  if (maestroPrefixes.includes(leadingNums)) return "Maestro"
  	  if (visaPrefixes.includes(leadingNums[0])) return "Visa"
  	  break
  	case 14:
  	  if (maestroPrefixes.includes(leadingNums)) return "Maestro"
      if (dinerPrefixes.includes(leadingNums.slice(0, 2))) return "Diner's Club"
  	  break
  	case 15:
  	  if (maestroPrefixes.includes(leadingNums)) return "Maestro"
  	  if (amexPrefixes.includes(leadingNums.slice(0, 2))) return "American Express"
  	  break
  	case 16:
  	  if (maestroPrefixes.includes(leadingNums)) return "Maestro"
  	  if (masterPrefixes.includes(leadingNums.slice(0, 2))) return "MasterCard"
	  if (discoverPrefixes.includes(leadingNums.slice(0, 2)) || 
	  	  discoverPrefixes.includes(leadingNums.slice(0, 3)) || 
	  	  discoverPrefixes.includes(leadingNums.slice(0, 4)))return "Discover"// this is problematic for the reasons listed above, "6012" would pass here. 
  	  if (visaPrefixes.includes(leadingNums[0])) return "Visa"
  	  break
  	case 17:
  	  if (maestroPrefixes.includes(leadingNums)) return "Maestro"
  	  break 
  	case 18:
  	  if (maestroPrefixes.includes(leadingNums)) return "Maestro"
  	  break
  	case 19:
  	  if (maestroPrefixes.includes(leadingNums)) return "Maestro"
  	  if (visaPrefixes.includes(leadingNums[0])) return "Visa"
  	  if (discoverPrefixes.includes(leadingNums.slice(0, 2)) ||
  	     discoverPrefixes.includes(leadingNums.slice(0, 3)) ||
  	     discoverPrefixes.includes(leadingNums.slice(0, 4)))return "Discover"
  	  break
  }
};


