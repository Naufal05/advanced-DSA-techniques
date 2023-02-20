// slididng window techique

// Find the max sum in the array

// Javascript code for
// O(n) solution for finding
// maximum sum of a subarray
// of size k
function maxSum(arr, n, k) {
  let max = 0;
  let sum = 0;
  // find initial sum of first k elements
  for (let i = 0; i < k; i++) {
    sum += arr[i];
    max = sum;
  }
  // iterate the array once
  // and increment the right edge
  for (let i = k; i < n; i++) {
    sum += arr[i] - arr[i - k];

    // compare if sum is more than max,
    // if yes then replace
    // max with new sum value
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

// Driver code
let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
let k = 4;
let n = arr.length;
document.write(maxSum(arr, n, k));
