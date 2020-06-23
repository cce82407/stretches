// weave should take any number of arrays and return a singular array of all arrays interwoven.
// if one array is longer than another place a null value in its allocated place
// weave([1, 2, 3], [4, 5]) === [1, 4, 2, 5, 3, null]

const weave = (...args) => {
  console.log(args[0])
  console.log(Array.isArray('m'))
  for (let i = 0; i < args.length; i++){
    if (!Array.isArray(args[i])){
      throw Error
    }
  }
  
};


module.exports = { weave };
