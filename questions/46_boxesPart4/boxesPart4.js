//Add two methods to this box class.

class Box {
  //Solution code for Boxes part 1-3
  constructor(color, capacity) {
    this.color = color;
    this.capacity = capacity;
    this.contents = [];
  }
  pack(col, cap) {
    if (this.contents.length !== this.capacity) {
      this.contents.push(new Box(col, cap));
    } else {
      throw new Error('Capacity Met!');
    }
  }
  unpack() {
    const result = [];
    if (!this.contents.length) {
      result.push(this.color);
    } else {
      result.push(this.color);
      for (let i = 0; i < this.contents.length; i++) {
        result.push(...this.contents[i].unpack());
      }
    }
    return result;
  }
  movingVan(dur) {
    return setTimeout(() => this.unpack(), dur);
  }
  expand(num,boxArr){
    this.capacity = this.capacity + num
    for (let i = 0; i < boxArr.length; i++){
     
      this.pack(boxArr[i][0], boxArr[i][1])
    }
  }
  loot(boxLocation){
    if (boxLocation > this.contents.length){
      const randomNum = Math.floor(Math.random()*this.contents.length)
      console.log(randomNum)

      return this.contents[randomNum]
    }
    else return this.contents[boxLocation]

  }
}

module.exports = { Box };
