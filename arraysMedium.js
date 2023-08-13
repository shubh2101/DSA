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
