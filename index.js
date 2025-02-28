function SearchGeeks(arr, target) {
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const guess = arr[mid];
  
      if (guess === target) {
        return mid;
      } else if (guess < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return -1; // Element not found
  }
  
  module.exports = SearchGeeks;