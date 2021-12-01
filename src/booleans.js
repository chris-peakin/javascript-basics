function negate(a) {
  if(a === true){
    return false;
  } else if(a === false){
    return true;
  }
};

function both(a, b) {
 if ((a === true) && (b === true)){
   return true;
 } else {
   return false;
 }
};

function either(a, b) {
  if ((a === true) || (b === true)){
    return true;
  } else {
    return false;
  }
};

function none(a, b) {
  if ((a !== true) && (b !== true)){
    return true;
  } else {
    return false;
  }
};

function one(a, b) {
  if ((a === true) && (b === false)){
    return true;
  } else if ((a === false) && (b === true)) {
    return true;
  } else {
    return false;
  }
};

function truthiness(a) {
  if (a){
    return true;
  } else{
    return false;
  }
};

function isEqual(a, b) {
  if (a === b){
    return true;
  } else {
    return false;
  };
};

function isGreaterThan(a, b) {
  if (a > b){
    return true;
  } else{
    return false;
  };
};

function isLessThanOrEqualTo(a, b) {
  if (a <= b){
    return true;
  } else{
    return false;
  };
};

function isOdd(a) {
  if ((a % 2) > 0){
    return true;
  } else{
    return false;
  };
};

function isEven(a) {
  if ((a % 2) === 0){
    return true;
  } else{
    return false;
  }
};

function isSquare(a) {
  squareRoot = Math.sqrt(a);
  if (Number.isInteger(squareRoot) === true){
    return true;
  } else {
    return false;
  }
};

function startsWith(char, string) {
  if (char === string.charAt(0)){
    return true;
  } else{
    return false;
  }
};

function containsVowels(string) {
  /*Observed in another student's shared code.
  [aeiou]/i is a regular expression, searching for vowels (a, e, i , o and u)...
  ...in a case-insensitive way.
  [aeiouAEIOU] would also work, but is less elegant.
  test() searches for a match between the reg-ex and string...
  ...returning either true or false. */
  return /[aeiou]/i.test(string);
};

function isLowerCase(string) {
  //Observed in another student's shared code, but in a longer format
  if (string === string.toLowerCase()){
    return true;
  } else {
    return false;
  };
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
