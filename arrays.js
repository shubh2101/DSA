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
findMissNum([1, 2, 4, 5], 5);
