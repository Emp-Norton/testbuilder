// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)
// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  var cardDetails = getCardNumberDetails(cardNumber)
  var networkDetails = getNetworkDetails()
  return checkNetworks(cardDetails, networkDetails)
};
  
var getNetworkDetails = function(){
  var networkDetails = {
    "Diner's Club" : {
      "prefixes" : ["38", "39"],
      "lengths" : [14]
    },
    "American Express" : {
      "prefixes" : ["34", "37"],
      "lengths" : [15] 
    },
   "Visa" : {
      "prefixes" : ["4"],
      "lengths" : [13, 16, 19] 
    },
    "MasterCard" : {
      "prefixes" : ["51", "52", "53", "54", "55"],
      "lengths" : [16] 
    },
    "Maestro" : {
      "prefixes" : ["5018", "5020", "5038", "6304"],
      "lengths" : [12, 13, 14, 15, 16, 17, 18, 19] 
    },
     "Discover" : {
      "prefixes" : ["65", "6011", "644", "645", "646", "647", "648", "649"],
      "lengths" : [16, 19]
    },
    "China UnionPay" : {
      "prefixes" : ["624", "625", "626", "6282", "6283", "6284", "6285", "6286", "6287", "6288"],
      "lengths" : [16, 17, 18, 19] 
    },
    "Switch" : {
      "prefixes" : ["4903", "4905", "4911", "4936", "564182", "633110", "6333", "6759"],
      "lengths" : [16, 18, 19]
    }
  };
  for (var prefix = 622126; prefix <= 622925; prefix++){
    networkDetails['China UnionPay'].prefixes.push(prefix.toString());
  }
  return networkDetails
}

var checkNetworks = function(cardDetails, networkDetails){
  while (cardDetails.prefix.length > 0){
    for (var network in networkDetails){
      if (validPrefix(cardDetails.prefix, networkDetails[network])){
        if (validLength(cardDetails.length, networkDetails[network])) return network
      }
    } 
    cardDetails.prefix = reducePrefix(cardDetails.prefix);
    checkNetworks(cardDetails, networkDetails);
  }
}

var validPrefix = function(cardPrefix, network){
  return network.prefixes.includes(cardPrefix)
}

var validLength = function(cardLength, network){
  return network.lengths.includes(cardLength)
}

var getCardNumberDetails = function(cardNumber){
  var prefix = cardNumber.slice(0, 6);
  var length = cardNumber.length;
  return { "prefix" : prefix, "length" : length }
}

var reducePrefix = function(prefix){
  var newPrefix = prefix.split("").slice(0, prefix.length-1).join("");
  return newPrefix
}