/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let biggestNum = a;
  if (biggestNum < b) {
    biggestNum = b;
  }
  if (biggestNum < c) {
    biggestNum = c;
  }
  return biggestNum;
}

function getMinNumber(a, b) {
  if (a > b) {
    return b;
  }
  return a;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x) {
    return true;
  }
  if (queen.y === king.y) {
    return true;
  }
  return Math.abs(king.x - queen.x) === Math.abs(king.y - queen.y);
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b > c && a + c > b && c + b > a) {
    if (a === b || b === c || a === c) {
      return true;
    }
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result = '';
  const stringNum = `${Math.floor(num / 10)}${num % 10}`;
  if (stringNum.length > 1) {
    for (let i = 0; i < +stringNum[0]; i += 1) {
      result += 'X';
    }
  }
  if (+stringNum[stringNum.length - 1] >= 5) {
    if (+stringNum[stringNum.length - 1] === 9) {
      result += 'IX';
    } else {
      result += 'V';
    }
  }
  if (+stringNum[stringNum.length - 1] === 4) {
    result += 'IV';
  } else if (+stringNum[stringNum.length - 1] !== 9) {
    for (
      let i = 0;
      i < getMinNumber(+stringNum[stringNum.length - 1] % 5, 3);
      i += 1
    ) {
      result += 'I';
    }
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let resultStr = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    if (resultStr.length > 0) {
      resultStr += ' ';
    }
    let character = '';
    switch (numberStr[i]) {
      case '-':
        character = 'minus';
        break;
      case '.':
      case ',':
        character = 'point';
        break;
      case '0':
        character = 'zero';
        break;
      case '1':
        character = 'one';
        break;
      case '2':
        character = 'two';
        break;
      case '3':
        character = 'three';
        break;
      case '4':
        character = 'four';
        break;
      case '5':
        character = 'five';
        break;
      case '6':
        character = 'six';
        break;
      case '7':
        character = 'seven';
        break;
      case '8':
        character = 'eight';
        break;
      case '9':
        character = 'nine';
        break;
      default:
        break;
    }
    resultStr += character;
  }
  return resultStr;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let index = 0;
  for (let i = str.length - 1; i >= 0; i -= 1) {
    if (str[i] !== str[index]) {
      return false;
    }
    index += 1;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = `${num}`;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === `${digit}`) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let lSum = 0;
  const lSums = [];
  for (let i = 0; i < arr.length; i += 1) {
    lSum += arr[i];
    lSums[i] = lSum;
  }
  let rSum = 0;
  const rSums = [];
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    rSum += arr[i];
    rSums[i] = rSum;
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (rSums[i] === lSums[i]) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  let t = 0;
  let r = size - 1;
  let b = size - 1;
  let l = 0;
  const result = [];
  for (let i = 0; i < size; i += 1) {
    result[i] = [];
  }
  let numToAdd = 1;
  while (t <= b && l <= r) {
    for (let i = l; i < r + 1; i += 1) {
      result[t][i] = numToAdd;
      numToAdd += 1;
    }
    t += 1;
    for (let i = t; i < b + 1; i += 1) {
      result[i][r] = numToAdd;
      numToAdd += 1;
    }
    r -= 1;
    if (t <= b) {
      for (let i = r; i > l - 1; i -= 1) {
        result[b][i] = numToAdd;
        numToAdd += 1;
      }
      b -= 1;
    }
    if (l <= r) {
      for (let i = b; i > t - 1; i -= 1) {
        result[i][l] = numToAdd;
        numToAdd += 1;
      }
      l += 1;
    }
  }

  return result;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const resultMatrix = matrix;
  const matrixCopy = [];
  let r = 0;
  let c = matrix.length - 1;
  for (let i = 0; i < matrix.length; i += 1) {
    matrixCopy[i] = [];
    for (let j = 0; j < matrix[i].length; j += 1) {
      matrixCopy[i][j] = matrix[i][j];
    }
  }
  for (let i = 0; i < matrixCopy.length; i += 1) {
    for (let j = 0; j < matrixCopy[i].length; j += 1) {
      resultMatrix[r][c] = matrixCopy[i][j];
      r += 1;
    }
    r = 0;
    c -= 1;
  }

  return resultMatrix;
}

function quickSort(arr) {
  const { length } = arr;
  if (length <= 1) {
    return arr;
  }
  const pivot = arr[length - 1];
  const greaterNums = [];
  const lowerNums = [];
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (pivot > arr[i]) {
      lowerNums[lowerNums.length] = arr[i];
    } else {
      greaterNums[greaterNums.length] = arr[i];
    }
  }
  return [...quickSort(lowerNums), pivot, ...quickSort(greaterNums)];
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const arr1 = arr;
  const sortedArray = quickSort(arr1);
  for (let i = 0; i < arr1.length; i += 1) {
    arr1[i] = sortedArray[i];
  }
  return arr1;
}
/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let str1 = str;
  let oddString = '';
  let evenString = '';
  const cache = [str];
  for (let i = 0; i < iterations; i += 1) {
    for (let j = 0; j < str1.length; j += 1) {
      if (j % 2 === 0) {
        evenString += str1[j];
      } else {
        oddString += str1[j];
      }
    }
    str1 = evenString + oddString;
    if (str1 === str) {
      return cache[iterations % cache.length];
    }
    cache[cache.length] = str1;

    oddString = '';
    evenString = '';
  }
  return str1;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const strNum = `${number}`;
  const digits = [];
  let isPivotFound = false;
  for (let i = 0; i < strNum.length; i += 1) {
    digits[i] = +strNum[i];
  }
  let pivot = 0;
  for (let i = digits.length - 2; i > 0; i -= 1) {
    if (digits[i] < digits[i + 1]) {
      pivot = i;
      isPivotFound = true;
      break;
    }
  }

  if (!isPivotFound) {
    return number;
  }

  let indexToSwap = -1;
  for (let i = digits.length - 1; i > pivot; i -= 1) {
    if (digits[i] > digits[pivot]) {
      if (digits[i] < digits[indexToSwap] || indexToSwap === -1) {
        indexToSwap = i;
      }
    }
  }

  [digits[pivot], digits[indexToSwap]] = [digits[indexToSwap], digits[pivot]];

  const leftP = digits.filter((_, index) => index <= pivot);
  const rightP = digits
    .filter((_, index) => index > pivot)
    .sort((a, b) => a - b);

  const digs = [...leftP, ...rightP];
  let result = '';
  for (let i = 0; i < digs.length; i += 1) {
    result += digs[i];
  }

  return +result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
