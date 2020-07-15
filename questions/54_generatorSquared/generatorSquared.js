// Create a generator that squares its input until max limit
// Approved documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// Pass the specs provided

//write your function here

function* squaredGen(i) {
  yield i;
  yield i + 10;
}

console.log(squaredGen(10));
console.log(squaredGen.next().value);

module.exports = { sqauredGen };
