const reverseString = require("./reverseString");

function hello() {
  console.log("Hello");
}

function isPalindrome(word) {
  return word.toLowerCase() === reverseString(word.toLowerCase());
}

module.exports = isPalindrome;
