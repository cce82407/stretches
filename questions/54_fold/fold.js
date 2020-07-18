const fold = (arr, int) => {
  let finalArr = [];

  function helperFold(arr) {
    if (arr.length === 0) {
      return finalArr;
    }
    if (arr.length === 1) {
      finalArr.push(arr[0]);
    }
    let sum = arr[0] + arr[arr.length - 1];
    console.log(sum);
    finalArr.push(sum);
    console.log(finalArr);
    truncatedArr = arr.slice(1, arr.length - 1);
    return helperFold(truncatedArr);
  }
  return helperFold(arr);
};

module.exports = fold;
