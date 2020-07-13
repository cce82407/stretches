const balanced = (arr) => {
  //YOUR CODE HERE

  //my idea: loop through the array and use reducer to find sums of the different pieces of the array
  // for (i = 0; i < Math.floor(arr.length / 2); i++) {
  return arr.reduce((acc, el) => {
    return acc + el;
  }, 0);
};

module.exports = balanced;
