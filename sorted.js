function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return "No";
    }
  }
  return "Yes";
}

console.log(isSorted([1, 2, 3, 4, 5])); // Yes
console.log(isSorted([1, 3, 2, 5, 4])); // No