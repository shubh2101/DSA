// largest element

function largestNum(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
// const arr = [2, 5, 8, 12, 6, 3, 15];
// console.log(largestNum(arr));

// second largest number

function secondLargest(arr) {
  let max = arr[0];
  let secondMax = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    }
    if (arr[i] < max && arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}
// const arr = [-30, -2, -10, 0, 2];
// // const arr = [2, 5, 12, 8, 12, 6, 3, 12, 9, -2, 10];
// console.log(secondLargest(arr));

function secondSmallest(arr) {
  let min = arr[0];
  let secondMin = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      secondMin = min;
      min = arr[i];
    }
    if (arr[i] > min && arr[i] < secondMin) {
      secondMin = arr[i];
    }
  }
  return secondMin;
}

// const arr = [-30, -2, -10, 0, 2];
// const arr = [2, 5, 12, 8, 12, 6, 3, 12, 9,  10];
// console.log(secondSmallest(arr));

// check if array is sorted
// const arr = [1, 2, 2, 3, 4, 4, 7];
// const arr = [1, 2, 9, 3, 4, 4, 7];

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

// console.log(isSorted(arr));
// TC: O(n);

// removeDuplicates
var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      nums[i + 1] = nums[j];
      i++;
    }
  }
  return i + 1;
};
// TC: O(n);
//SC : O(1)

// Left rotate the array by 1 place

const leftRotateBy1 = (arr) => {
  let temp = arr[0];
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[n - 1] = temp;
  console.log(arr);
};

// const arr = [1, 2, 3, 4, 5, 6];
// leftRotateBy1(arr);

//left rotate arry by d places
const leftRotateByd = (arr, d) => {
  let n = arr.length;
  let temp = [];
  d = d % n;

  for (let i = 0; i < d; i++) {
    temp.push(arr[i]);
  }
  //shifting by d places
  for (let i = d; i <= n - 1; i++) {
    arr[i - d] = arr[i];
  }
  //put temp to back
  for (let i = 0; i < d; i++) {
    arr[n - d + i] = temp[i];
  }
  console.log(arr);
};
// const arr = [1, 2, 3, 4, 5, 6];
// leftRotateByd(arr, 2);
// TC = O(n + d)
//SC = O(d)

// reverse upto k index

function reverseDindex(arr, k) {
  for (let i = 0; i < Math.floor(k / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[k - 1 - i];
    arr[k - 1 - i] = temp;
  }
  console.log(arr);
}
// reverseDindex([1, 2, 3, 4, 5, 6], 3);

function reverseDindexSTL(arr, d) {
  const reversePart = arr.slice(0, d).reverse();
  const reversedArr = [...reversePart, ...arr.slice(d)];
  console.log(reversedArr);
}
// reverseDindexSTL([1, 2, 3, 4, 5, 6], 3);

// left rotate d optimal soln

// const leftRotateOptimal = (arr, d) => {};

//UNION

function findUnion(arr1, arr2) {
  let i = 0;
  let j = 0;
  let union = [];

  //   while (i < arr1.length && j < arr2.length) {
  //     if (arr1[i] === union[union.length - 1]) {
  //       i++;
  //     } else if (arr2[j] === union[union.length - 1]) {
  //       j++;
  //     } else if (arr1[i] <= arr2[j]) {
  //       union.push(arr1[i]);
  //       i++;
  //     } else if (arr1[i] > arr2[j]) {
  //       union.push(arr2[j]);
  //       j++;
  //     }
  //   }

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      if (union.length === 0 || arr1[i] !== union[union.length - 1]) {
        union.push(arr1[i]);
      }
      i++;
    } else {
      if (union.length === 0 || arr2[j] !== union[union.length - 1]) {
        union.push(arr2[j]);
      }
      j++;
    }
  }
  while (i < arr1.length) {
    if (arr1[i] !== union[union.length - 1]) {
      union.push(arr1[i]);
    }
    i++;
  }

  while (j < arr2.length) {
    if (arr2[j] !== union[union.length - 1]) {
      union.push(arr2[j]);
    }
    j++;
  }
  console.log(union);
}

// const arr1 = [2, 2, 3, 4, 4, 8];
// const arr2 = [3, 4, 5, 6, 7, 7, 8];
// findUnion(arr1, arr2);

const findIntersection = (A, B) => {
  const n1 = A.length;
  const n2 = B.length;
  const visArr = new Array(n2).fill(0);
  let intersectionArr = [];

  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n2; j++) {
      if (A[i] === B[j] && visArr[j] === 0) {
        intersectionArr.push(A[i]);
        visArr[j] = 1;
        break;
      }
      if (B[j] > A[i]) break;
    }
  }
  console.log(intersectionArr);
};

const A = [1, 2, 2, 3, 3, 4, 5, 6];
const B = [2, 3, 3, 5, 6, 6, 7, 8];

// findIntersection(A, B);

// if no duplicates
const findIntersectionSTL = (A, B) => {
  const intersectionArr = A.filter((elm) => B.includes(elm));
  console.log(intersectionArr);
};
// findIntersectionSTL(A, B);

const intersection = (A, B) => {
  const n1 = A.length;
  const n2 = B.length;
  let result = [];
  let i = 0;
  let j = 0;

  while (i < n1 && j < n2) {
    if (A[i] < B[j]) {
      i++;
    } else if (B[j] < A[i]) {
      j++;
    } else {
      result.push(A[i]);
      i++;
      j++;
    }
  }
  console.log(result);
};

// intersection(A, B);

// FInding Missing NUM
//BRUTE FORCE
const findMissingNum = (arr, Num) => {
  for (let i = 1; i <= Num; i++) {
    let flag = 0; // Initialize a flag to indicate whether the current number is found in the array
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        // Check if the current element in the array is equal to the current number being checked
        flag = 1; // Set the flag to indicate that the number was found in the array
        break; // Exit the loop early since we found a match
      }
    }
    if (flag === 0) {
      return i; // If the flag is still 0, the current number is missing in the array, so return it
    }
  }
  return -1; // If no missing number is found, return -1
};

// console.log(findMissingNum([1, 2, 4, 5], 5));
// TC O(n * N)
//SC O(1)

//missing num hashing better soln
const findMissNum = (arr, N) => {
  let hash = new Array(N + 1).fill(0);
  for (let i = 0; i < N - 1; i++) {
    hash[arr[i]] = 1;
  }

  for (let i = 1; i < N - 1; i++) {
    if (hash[i] === 0) {
      return i;
    }
  }
  return -1;
};
// findMissNum([1, 2, 4, 5], 5);

// OPTIMAL SOL SUM

const findMissingNumOptimal = (arr, N) => {
  let sum = (N * (N + 1)) / 2;
  let s2 = 0;
  for (let i = 0; i < arr.length; i++) {
    s2 += arr[i];
  }
  return sum - s2;
};
// const f1 = findMissingNumOptimal([1, 2, 4, 5], 5);
// console.log(f1);

// MAX CONSECUTIVE ONES

function maxConsOnes(arr) {
  let max = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
      max = Math.max(count, max);
    } else {
      count = 0;
    }
  }
  console.log(` max : ${max}`);
}
function maxConsOnes2(arr) {
  let max = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
    }
    if (count >= max) {
      max = count;
    }
    if (arr[i] === 0) {
      count = 0;
    }
  }
  console.log(` max : ${max}`);
}

// maxConsOnes([1, 0, 1, 1, 1, 1, 1, 0, 1]);

// get single element
// BRUTE

function getSingle(arr) {
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      count++;
    }
    if ((count = 1)) return arr[i];
  }
}

// const ans = getSingle([4, 1, 2, 1, 2]);
// console.log(ans);

//BETTER ONE
function getSingleElement(arr) {
  // Size of the array:
  let n = arr.length;

  // Find the maximum element:
  let maxi = arr[0];
  for (let i = 0; i < n; i++) {
    maxi = Math.max(maxi, arr[i]);
  }

  // Declare hash array of size maxi+1
  // And hash the given array:
  let hash = new Array(maxi + 1).fill(0);
  for (let i = 0; i < n; i++) {
    hash[arr[i]]++;
  }
  console.log(hash);

  // Find the single element and return the answer:
  for (let i = 0; i < n; i++) {
    if (hash[arr[i]] === 1) {
      return arr[i];
    }
  }

  // This line will never execute
  // if the array contains a single element.
  return -1;
}

// function main() {
//   let arr = [2, 2, 3, 5, 5, 8, 8];
//   let ans = getSingleElement(arr);
//   console.log("The single element is:", ans);
// }

// main();

// BETTER 2
function findSingleNumber(arr) {
  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (hash[num]) {
      hash[num]++;
    } else {
      hash[num] = 1;
    }
  }

  const keys = Object.keys(hash);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (hash[key] === 1) {
      return parseInt(key);
    }
  }
}

// Example usage:
// const array = [-2, 3, 3, 5, 5, 8, 8];
// // const array = [4, 1, 2, 1, 2];
// const singleNumber = findSingleNumber(array);
// console.log(singleNumber);

// OPTIMAL USING XOR

const getSingleXOR = (arr) => {
  let XOR = 0;
  for (let i = 0; i < arr.length; i++) {
    XOR = XOR ^ arr[i];
  }
  return XOR;
};
// const ans1 = getSingleXOR([4, 1, 2, 1, 2, 8, 8]);
// console.log(ans1)

//LONGEST SUB-ARRAY WITH SUM K (POSITIVES)

//BRUTE

function longestSubarray(arr, k) {
  let len = 0;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      if (sum === k) {
        len = Math.max(len, j - i + 1);
      }
    }
  }
  return len;
}

// const len = longestSubarray([1, 2, 3, 1, 1, 1, 1, 1, 4, 2, 3], 3);
// console.log("The length of the longest subarray is:", len);
//TC = O(n*n*n)

// BRUTE FORCE 2 with TC O(n*n)

function longestSubarray2(arr, k) {
  let len = 0;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let sum = 0;

    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum === k) {
        len = Math.max(len, j - i + 1);
      }
    }
  }
  return len;
}
// const len = longestSubarray2([1, 2, 3, 1, 1, 1, 1, 1, 4, 2, 3], 3);
// console.log("The length of the longest subarray is:", len);

// Better soln MAP
function longestSubarrayWithSum(arr, k) {
  const n = arr.length;
  let preSumMap = new Map();
  let currSum = 0;
  let maxLength = 0;
  for (let i = 0; i < n; i++) {
    currSum += arr[i];

    if (currSum === k) {
      maxLength = Math.max(maxLength, i + 1);
    }

    let rem = currSum - k;

    if (preSumMap.has(rem)) {
      let len = i - preSumMap.get(rem);
      maxLength = Math.max(maxLength, len);
    }

    if (!preSumMap.has(currSum)) {
      preSumMap.set(currSum, i);
    }
  }

  return maxLength; // Return the maxLength
}

const array = [1, 2, 0, 3, -2, 5];
const sum = 6;
const result = longestSubarrayWithSum(array, sum);
console.log("The length of the longest subarray is:", result); // Output should be 4 (subarray: [1, 2, 3, -2])
