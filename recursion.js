// 1 print N to 1
const printN1 = (n) => {
  if (n === 0) return;
  console.log(n);
  printN1(n - 1);
};

// TC theta(n)
// AS = theta(n)

// print 1 to N
const print1N = (n) => {
  if (n === 0) return;
  print1N(n - 1);
  console.log(n);
};
// TC theta(n)
// AS = theta(n)

const fabinacci = (n) => {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];
  let a = 0;
  let b = 1;
  let series = [0, 1];
  for (let i = 2; i < n; i++) {
    [a, b] = [b, a + b];
    series.push(b);
  }
  console.log(series);
};

//fibonacciRec

const fibRec = (n) => {
  if (n <= 1) return n;
  return fibRec(n - 1) + fibRec(n - 2);
};

// sum of first n natural num using recursion

function sumNatural(n) {
  if (n === 0) return 0;
  return n + sumNatural(n - 1);
}
//TC theta(n)
// AS = theta(n)

// reverse an array using 1 variable
function reverseArray(arr, i = 0) {
  const n = arr.length - 1;
  if (i >= Math.floor(n / 2)) return;
  [arr[i], arr[n - i]] = [arr[n - i], arr[i]];
  return reverseArray(arr, i + 1);
}
const myArr = [1, 2, 3, 4, 5];
reverseArray(myArr);
// console.log(myArr);

// Palindrome check for string
function isPalindrome(str, start = 0, end = str.length - 1) {
  // Base case: If the two pointers meet or cross each other, the string is a palindrome
  if (start >= end) return true;
  if (str[start] !== str[end]) return false;
  return isPalindrome(str, start + 1, end - 1);
}
//TC O(n)
//AS O(n)

// sum of digits

function sumOfDigits(n) {
  if (n <= 9) return n;
  let ld = Math.floor(n % 10);
  return ld + sumOfDigits(Math.floor(n / 10));
}
// TC theta(d)
// AS theta(d)

//  iterative solution more better
function iterativeSumOfDigits(n) {
  let sum = 0;
  while (n > 0) {
    ld = Math.floor(n % 10);
    sum += ld;
    n = Math.floor(n / 10);
  }
  return sum;
}
// TC theta(d)
// AS theta(1)

// Rope cutting problem

//Given a rope of length n, you need to find the maximum number of pieces
//you can make such that the length of every piece is in set {a, b, c} for
//the given three values a, b, c

function maxPieces(n, a, b, c) {
  if (n < 0) return -1;
  if (n === 0) return 0;

  const option1 = maxPieces(n - a, a, b, c);
  const option2 = maxPieces(n - b, a, b, c);
  const option3 = maxPieces(n - c, a, b, c);

  const maxOption = Math.max(option1, option2, option3);
  // If the maximum option is -1, it means it's not possible to cut the rope further
  if (maxOption < -1) return -1;
  // Return 1 plus the maximum of the three options since we made one cut and formed a piece
  return maxOption + 1;
}
// TC (3^n)
//For each recursive call, it makes three more recursive calls, and so on.
//This branching continues until the rope length reaches 0 or becomes negative (invalid case).
// const result = maxPieces(23, 11, 9, 12);
// console.log(`Maximum number of pieces: ${result}`);

// Subsets of a set string
// "ABC" => "", "A", "B", "C", "AB", "BC" , "AC", "ABC"
// "A" => "" , "A"
//"AB" => "", "A", "B", "AB"

function subsets(string, curr = "", index = 0) {
  if (index === string.length) {
    console.log(curr);
    return;
  }
  subsets(string, curr, index + 1);
  subsets(string, curr + string[index], index + 1);
}

// subsets("ABC");

var isPowerOfTwo = function (n) {
  if (n === 1) return true;
  if (n <= 0) return false;
  if (n % 2 !== 0) return false;
  return isPowerOfTwo(n / 2);
};
//Time Complexity : O(logn)
//Space Complexity : O(logn) [Rcursive stack is counted]

const isPowerOfTwos = function (n) {
  if (n < 1) return false;
  if (n === 1) return true;

  const log2n = Math.log2(n);
  return Math.ceil(log2n) === Math.floor(log2n);
};
//If n is a power of 2, the logarithm will be a whole number (an integer).
// So, we use Math.ceil() and Math.floor() to round the logarithm up and down, respectively, and then check if they are equal

// subsequence of an array of numbers

const subSequence = function (arr, i = 0, curr = []) {
  if (i === arr.length) {
    console.log(curr);
    return;
  }
  // Include the current element in the subsequence
  curr.push(arr[i]);
  subSequence(arr, i + 1, curr);

  // Exclude the current element from the subsequence
  curr.pop();
  subSequence(arr, i + 1, curr);
};

const subSequence2 = function (arr, i = 0, curr = []) {
  if (i === arr.length) {
    console.log(curr);
    return;
  }
  // Include the current element in the temporary subsequence and proceed with the next index.
  subSequence(arr, i + 1, [...curr, arr[i]]);
  // Exclude the current element from the temporary subsequence and proceed with the next index.
  subSequence(arr, i + 1, curr);
};

// ----------------------------------------------------------------
// Print the subsequences whose sum is equal to targetSum
// const subSeqSum = function (arr, targetSum, i = 0, curr = [], currSum = 0) {
//   if (i === arr.length) {
//     if (currSum === targetSum) {
//       console.log(curr);
//     }
//     return;
//   }

//   subSeqSum(arr, targetSum, i + 1, [...curr, arr[i]], currSum + arr[i]);
//   subSeqSum(arr, targetSum, i + 1, curr, currSum);
// };

// const targetSum = 2;
// subSeqSum([1, 2, 1], targetSum);

// ----------------------------------------------------------------
// Print the first subsequence whose sum is equal to targetSum
const subSeqSum = function (arr, targetSum, i = 0, curr = [], currSum = 0) {
  if (i === arr.length) {
    if (currSum === targetSum) {
      console.log(curr);
      return true; // condition satified
    }
    return false; // condition not satisfied
  }

  // Include the current element in the subsequence and update the current sum
  if (subSeqSum(arr, targetSum, i + 1, [...curr, arr[i]], currSum + arr[i])) {
    return true; // If a valid subsequence is found, propagate the result upwards
  }

  // Exclude the current element from the subsequence and continue with the next index
  if (subSeqSum(arr, targetSum, i + 1, curr, currSum)) {
    return true;
  }
  return false;
};

// const targetSum = 1;
// subSeqSum([1, 2, 1], targetSum);

const subSeqSumCount = function (arr, targetSum, i = 0, currSum = 0) {
  if (i === arr.length) {
    if (currSum === targetSum) {
      return 1;
    }
    return 0;
  }
  const left = subSeqSumCount(arr, targetSum, i + 1, currSum + arr[i]);
  const right = subSeqSumCount(arr, targetSum, i + 1, currSum);
  return left + right;
};

const targetSum = 2;
console.log(subSeqSumCount([1, 2, 1], targetSum));
