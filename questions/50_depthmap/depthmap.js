//Your excavating a newly found archaeological site and need to track your depth
//Write a function to recursively "dig" through this object installing a depth key along the way
//return the object with it's depth indicated

const recordDepth = (obj) => {
  if (typeof obj !== 'object'){
    throw Error
  }
  if (obj.depth){
    return obj
  }
  let level = 0
  for (let key in obj){
    if (typeof obj[key] === 'object'){
      obj.depth = level
      level++
      recordDepth(obj[key])
    }
  }
  //write code here
};

module.exports = { recordDepth };
