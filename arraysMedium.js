// TWO SUM PROBLEM

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

// SORT ARRAYS OF 0s, 1s, 2s,

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

sortZereosOnesTwosDutchFlagWhile([0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1]);
