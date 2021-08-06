function findFirstDuplicate(arr) {
  // create two counters to compare
  let first = 0
  let second = 0
  // check to see if array even has two numbers to compare. If not, exit
  if (arr.length < 2) return -1
  // iterate through array
  for (let i = 0; i < arr.length; i++){
    // make counters be concurrent elements of array
    first = arr[i]
    second = arr[i + 1]
    // if elements are equal to each other, return first element found
    if(arr[first] === arr[second]) return arr[i + 1]
  }
  // else return -1
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
