// 1) TWO SUM PROBLEM

// Brute force

function twoSumBrute(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
}

// console.log(twoSumBrute([2, 6, 5, 8, 11], 14));
// TC O(n*n)

function twoSumBetter(arr, target) {
  let hash = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (hash.has(target - arr[i])) {
      return true;
    } else {
      hash.set(arr[i], i);
    }
  }
  return false;
}
// console.log(twoSumBetter([2, 6, 5, 8, 11], 14));
//TC O(n)
//SC O(n)

// using object

function twoSum(nums, target) {
  const numObject = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complement in numObject) {
      return [numObject[complement], i]; //return the indices
    }

    numObject[nums[i]] = i; // Store the number and its index in the object
  }

  return [];
}

//TC O(n)
//SC O(n)

// OPTIMAL FOR VARIENT 1 USING 2 POINTER

function twoSumOptimal(arr, target) {
  let left = 0,
    right = arr.length - 1;

  arr.sort((a, b) => a - b);

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum < target) left++;
    if (sum > target) right--;
    if (sum === target) return true;
  }
  return false;
}

// console.log(twoSumOptimal([2, 6, 5, 8, 11], 14));

//TC = O(n + n*logn)
//SC = O(1)

// 2) SORT ARRAYS OF 0s, 1s, 2s,

// Brute merge sort TC = O(n logn) SC = O(n)

// BETTER soln

function sortZereosOnesTwos(arr) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) count0++;
    else if (arr[i] === 1) count1++;
    else count2++;
  }
  let i = 0;
  while (i < arr.length) {
    if (i < count0) {
      arr[i] = 0;
    } else if (i >= count0 && i < count0 + count1) {
      arr[i] = 1;
    } else {
      arr[i] = 2;
    }
    i++;
  }
  // or run  for loops
  //   for (let i = 0; i < arr.length; i++) {
  //     if (i < count0) {
  //       arr[i] = 0;
  //     } else if (i >= count0 && i < count0 + count1) {
  //       arr[i] = 1;
  //     } else {
  //       arr[i] = 2;
  //     }
  //   }

  console.log(arr);
}

// sortZereosOnesTwos([0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1]);

function sortZereosOnesTwosDutchFlag(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  for (let i = 0; mid <= high; i++) {
    if (arr[mid] === 0) {
      //swap low and mid
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      // swap high and mid
      [arr[high], arr[mid]] = [arr[mid], arr[high]];
      high--;
    }
  }
  console.log(arr);
}
// sortZereosOnesTwosDutchFlag([0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1]);

function sortZereosOnesTwosDutchFlagWhile(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      //swap low and mid
      swap(arr, low, mid);
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      // swap high and mid
      swap(arr, high, mid);
      high--;
    }
  }
  console.log(arr);
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// sortZereosOnesTwosDutchFlagWhile([0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1]);

// 3) MAJORITY ELEMENT IN THE ARRAY
//BRUTE

function majorityElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        count++;
      }
    }

    if (count > arr.length / 2) {
      return arr[i];
    }
  }
  return -1;
}
// console.log(majorityElement([2, 2, 3, 4, 5, 3, 3, 2, 2, 2, 2]));

// BETTER SOLUTION
//HASHING

const majorityElementHashing = (arr) => {
  const countMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (countMap.has(arr[i])) {
      countMap.set(arr[i], countMap.get(arr[i]) + 1);
      if (countMap.get(arr[i]) > arr.length / 2) {
        return arr[i];
      }
    } else {
      countMap.set(arr[i], 1);
    }
  }

  return -1;
};

// console.log(majorityElementHashing([3, 2, 2, 3, 3, 2, 2]));
// TC = O(n)
// SC = O(n)

//MOORE VOTING ALGO (OPTIMAL)

function majorityElementMooreVoting(arr) {
  let candidate = null;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      candidate = arr[i];
      count = 1;
    } else if (arr[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }
  // check if its majority el
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === candidate) {
      counter++;
    }
  }

  if (counter > arr.length / 2) {
    return candidate;
  }

  return null;
}

// console.log(majorityElementMooreVoting([2, 2, 1, 1, 1, 2, 2, 1, 1]));

// 4) MAXIMUM SUBARRAY SUM
//BRUTE FORCE

function maxSubarraySumBrute(arr) {
  let maxi = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        {
          sum += arr[k];
          maxi = Math.max(maxi, sum);
        }
      }
    }
  }
  return maxi;
}

// console.log(maxSubarraySumBrute([-2, -3, 4, -1, -2, 1, 5, -3]));
// TC = O(n * n* n)

// Better

function maxSubarraySumBetter(arr) {
  let maxi = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      maxi = Math.max(maxi, sum);
    }
  }
  return maxi;
}

// console.log(maxSubarraySumBetter([-2, -3, 4, -1, -2, 1, 5, -3]));
// TC = O(n * n)

// OPTIMAL
// KADANE ALGORITHM

function maxSubarraySumKadane(arr) {
  let maxi = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum < 0) {
      sum = 0;
    }
    maxi = Math.max(maxi, sum);
  }
  console.log(maxi);
}
// maxSubarraySumKadane([-2, -3, 4, -1, -2, 1, 5, -3]);

//TC = O(n)
//SC = O(1)

// 5) REARRANGE THE POSITIVES AND NEGATIVES ALTERNATIVELY

//brute

function rearrangeArray(arr) {
  let pos = [];
  let neg = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos.push(arr[i]);
    } else {
      neg.push(arr[i]);
    }
  }

  for (let i = 0; i < arr.length / 2; i++) {
    arr[2 * i] = pos[i];
    arr[2 * i + 1] = neg[i];
  }
  return arr;
}
// TC = O(n) + O(n/2)
// SC = O(n/2) + O(n/2)
// console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));

function rearrangeArrayOptimal(arr) {
  let resultArr = [];
  let posIndex = 0;
  let negIndex = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      resultArr[posIndex] = arr[i];
      posIndex += 2;
    } else {
      resultArr[negIndex] = arr[i];
      negIndex += 2;
    }
  }
  console.log(resultArr);
}

// rearrangeArrayOptimal([3, 1, -2, -5, 2, -4]);

// variety 2 if positives and negatives are not equal

//Brute

function rearrangeArrayVar2(arr) {
  const n = arr.length;
  let pos = [];
  let neg = [];

  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      pos.push(arr[i]);
    } else {
      neg.push(arr[i]);
    }
  }
  const minSize = Math.min(pos.length, neg.length);
  const maxSize = Math.max(pos.length, neg.length);

  for (let i = 0; i < minSize; i++) {
    arr[2 * i] = pos[i];
    arr[2 * i + 1] = neg[i];
  }

  index = minSize * 2;

  for (let i = minSize; i < maxSize; i++) {
    if (pos.length > neg.length) {
      arr[index] = pos[i];
      index++;
    } else {
      arr[index] = neg[i];
      index++;
    }
  }

  console.log(arr);
}

// rearrangeArrayVar2([1, -2, -4, -55, -21, -11, 89, 99]);

// 6) NEXT PERMUTATION
// OPTIMAL

function nextPermutation(arr) {
  let pivot = -1;
  const n = arr.length;

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      pivot = i;
      break;
    }
  }

  //no pivot found

  if (pivot === -1) {
    arr.reverse();
  }

  for (let j = n - 1; j >= pivot; j--) {
    if (arr[j] > arr[pivot]) {
      [arr[j], arr[pivot]] = [arr[pivot], arr[j]];
      break;
    }
  }

  //reverse the suffix

  const arr1 = arr.slice(pivot + 1, n);
  arr.splice(pivot + 1, n, ...arr1);

  console.log(arr);
}

// nextPermutation([2, 1, 5, 4, 3, 0, 0]);

//LEADER OF AN ARRAY

//BRUTE

function leaderArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let leader = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        leader = false;
      }
    }
    if (leader === true) {
      result.push(arr[i]);
    }
  }
  return result;
}
// TC = O(n*n)
// console.log(leaderArray([10, 22, 12, 3, 0, 6]));

const leaderArrayOptimal = (arr) => {
  let maxi = Number.MIN_SAFE_INTEGER;
  let result = [];
  let n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] > maxi) {
      result.push(arr[i]);
      maxi = arr[i];
    }
  }
  return result.sort((a, b) => a - b);
};
console.log(leaderArrayOptimal([10, 22, 12, 3, 0, 6]));
