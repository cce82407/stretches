// Caeser Cipher
// https://en.wikipedia.org/wiki/Caesar_cipher
// create a function that takes a string and a shift value and returns an encrypted string

// accept only alphanumeric characters
// shifted values should wrap back around
// z -> a  and 9 -> 0

// example
// str = 'hello'
// shift = 3
// result = 'khoor'

// example
// str = "yolo789"
// shift = 4
// result = "csps123"

const encryptString = (str, shift) => {
  charStr = []
  for (let i = 0; i < str.length; i++){
    if(typeof str[i] !== 'string'){
      throw Error
    }
    charStr.push(str.charCodeAt(i)+shift) 
  }
  let shiftedStr = ''
  for(let i = 0; i < charStr.length; i++){
    shiftedStr += String.fromCharCode(charStr[i])
  
  // YOUR CODE
};console.log(shiftedStr)
return(shiftedStr)
}

module.exports = { encryptString };
