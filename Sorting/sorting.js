function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i <= n - 2; i++) {
    let minInd = i;
    for (let j = i; j <= n - 1; j++) {
      if (arr[j] < arr[minInd]) {
        minInd = j;
      }
    }
    [arr[i], arr[minInd]] = [arr[minInd], arr[i]];
  }
  console.log(arr);
}
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    let didSwap = false;
    for (let j = 0; j <= i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        didSwap = true;
      }
    }
    // If no two elements were swapped in the inner loop, the array is already sorted
    if (!didSwap) {
      break;
    }
    console.log("runs");
  }
  console.log(arr);
}

const insertionSort = (arr) => {
  n = arr.length;
  for (let i = 0; i < n; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }
  console.log(arr);
};

const mergeSort = (arr, low = 0, high = arr.length - 1) => {
  if (low === high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
};

function merge(arr, low, mid, high) {
  temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}
// const arr = [2, 1, 7, 46, 9, 4, 5, 3, 12, 8];
// mergeSort(arr);
// // mergeSort(arr, 0, arr.length - 1);
// console.log(arr);

function partition(arr, low, high) {
  let pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }
    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }

    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[low], arr[j]] = [arr[j], arr[low]];

  return j;
}
function qSort(arr, low, high) {
  if (low < high) {
    const pIndex = partition(arr, low, high);
    console.log(arr[pIndex]);
    qSort(arr, low, pIndex - 1);
    qSort(arr, pIndex + 1, high);
  }
}

// const arr = [4, 6, 2, 5, 7, 9, 1, 3];
// qSort(arr, 0, arr.length - 1);
// console.log(arr);
