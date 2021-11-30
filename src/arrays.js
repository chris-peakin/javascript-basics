const getNthElement = (index, array) => {
  if (index >= array.length){
  return array[index - array.length];
  } else{
  return array[index];
  }
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const array2 = array.concat(element);
  return array2;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  let strings = [];
  for (let i = 0; i < numbers.length; i += 1){
    strings.push(numbers[i].toString());
  }
  return strings;
};

const uppercaseWordsInArray = strings => {
  let uppercaseArray = [];
  for (let i = 0; i < strings.length; i += 1){
    uppercaseArray.push(strings[i].toUpperCase());
  }
  return uppercaseArray;
};

const reverseWordsInArray = strings => {
  /*A very difficult problem to solve for me, after some googling, I found the following:
  https://stackoverflow.com/questions/59621299/javascript-reversing-every-string-of-an-array
  Solution below is a simplified version of what the person asking the question got to in the end */
  let reversedArray = [];
  //First for loop loops through the array and processes each string
  for (let i = 0; i < strings.length; i += 1){
    /*Second for loop stores the letters in reverse, starting with the last character and moving down.
    j has to be 1 less than the word's length and decreases by 1 each time, and the loop stops it reaches character 0 */
    let reversedWord = '';
    for (let j = strings[i].length - 1; j >= 0; j -= 1){
      reversedWord += strings[i][j];
    }
    reversedArray.push(reversedWord);
  }
  return reversedArray;
};

const onlyEven = numbers => {
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i += 1){
    /*An even number is any number that gives no remainder when divided by two
    Only numbers meeting that condition are pushed into the new array */
    if (numbers[i] % 2 === 0){
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
};

const removeNthElement2 = (index, array) => {
  let shorterArray = [...array];
  shorterArray.splice(index, 1);
  return shorterArray;
};

const elementsStartingWithAVowel = strings => {
  /*https://stackoverflow.com/questions/52028403/filter-array-of-strings-keeping-only-ones-starting-with-vowels
  /^[aeiou]/i is basically asking to match a/e/i/o/u at the start and the /i part makes it case-insensitive
  Those that don't begin with a vowel are .filter -ed out
  At this stage, still not 100% sure how this works entirely */
  return strings.filter(str => /^[aeiou]/i.test(str));
};

const removeSpaces = string => {
  let spacelessString = '';
  /*For loop rolls through every character in the string, checking that it's NOT an empty space
  Because it rolls through every character, sneaky spaces have nowhere to hide here
  If the character is NOT an empty space, it gets added to the spacelessString variable */
  for (i = 0; i < string.length; i += 1){
    if(string[i] !== ' '){
      spacelessString += string[i]
    }
  }
  return spacelessString;
};

const sumNumbers = numbers => {
  let sum = 0;
  //For loop rolls through array and adds each element to sum until all elements are added
  for (let i = 0; i < numbers.length; i += 1){
    sum += numbers[i];
  }
  return sum;
};

const sortByLastLetter = strings => {
  /*https://stackoverflow.com/questions/32491788/sort-strings-by-last-letter-alphabetically-in-javascript
  Nested function compares two elements in the strings array (a and b) */
  function endComparator(a,b){
    /*  slice(-1) extracts the last character from each element (ie. -1 from the end)
    If the character value of a is less than that of b, -1 is returned.
    Likewise, 1 is returned if vice versa. 0 is returned if they're the same.
    (Character value is the numerical value assigned to that character)*/
    if (a.slice(-1) < b.slice(-1)) return -1;
    if (a.slice(-1) > b.slice(-1)) return 1;
    return 0;
  }
  /* strings.sort(endComparator) applies the above function to the strings array.
  .sort sorts the contents of the strings array (post-function) alphabetically
  It does this by actually sorting them numerically because -1 has been returned
  for a last letter that is lower alphabetically, and 1 returned for one higher alphabetically.
  The array is then sorted from -1 to 1.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort */
  return strings.sort(endComparator);
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
