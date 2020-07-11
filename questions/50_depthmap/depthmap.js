//Your excavating a newly found archaeological site and need to track your depth
//Write a function to recursively "dig" through this object installing a depth key along the way
//return the object with it's depth indicated

const recordDepth = (obj) => {
  if (typeof obj !== 'object'){
    throw Error
  }


  const innerObj = (newObj, count = 0) => {
    for( let key in newObj ){
      newObj.depth = count
      if (typeof newObj[key] === 'object'){
        count ++
        innerObj(newObj[key], count)
        count--
      }
    
    }
    return newObj

  }
  console.log(innerObj(obj))
 return innerObj(obj)
  //write code here
};

module.exports = { recordDepth };
