// Write a function that takes an array and a target sum
// This function should return an array of the target's sum pair or null if none found

//ie:: twoNumberSum([3, -2, 7, 29, 12, -5, 8, 10], 3) => [-5, 8]

//***Your solution should NOT include nested loops of any type***

const twoNumberSum = (arr, tarVal) => {
  const sortedArr = arr.sort(function (a, b) {
    return a - b;
  });
  console.log(sortedArr);
  return sortedArr;
  //write code here
};

// here I was thinking of using recursion to find a number that when I subtract the targetVal from it, I could see if it is included in the array. Not sure!
// function check(num){
//   let minusVal = num - tar
//   if (num - tarVal)
// }

module.exports = { twoNumberSum };
