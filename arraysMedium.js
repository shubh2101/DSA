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
