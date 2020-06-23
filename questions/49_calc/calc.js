// - Write a chainable Calculator that can add, subtract,and multiply

class chainCalc {
  constructor(num){
    this.num = num
    if (typeof num !== 'number'){
      throw Error
    }
    this.result = this.num
  }
  add(numToAdd){
    this.result += numToAdd
    return this
  }
  sub(numToSub){
    this.result -= numToSub
    return this
  }
  mul(numToMult){
    this.result *= numToMult
    return this
  }
}

module.exports = { chainCalc };
