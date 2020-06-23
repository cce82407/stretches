// Fix the Messenger class to check input and to allow listeners to unsubscribe

class Messenger {
  constructor(channel) {
    if(typeof channel !== 'object' || !channel.name){
      throw Error
    }
    this.channel = channel.name;
    this.listeners = {};
  }
  getChannel(type) {
    this.listeners[type] = this.listeners[type] || [];
    return this.listeners[type];
  }
 
      subscribe(type, fn) {
        this.getChannel(type).push(fn);
        return () => {
        this.listeners[type] = this.listeners[type].filter(
        (listener) => listener !== fn
        );
        };
        } 
     
  
  publish(type, msg) {
    this.getChannel(type).forEach((listener) =>
      listener(`${this.channel} - ${type} - ${msg}`)
    );
  }
  
}

module.exports = { Messenger };
