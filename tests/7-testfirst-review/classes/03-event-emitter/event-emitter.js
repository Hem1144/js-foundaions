/* eslint-disable no-unused-vars */
class MyEventEmitter {
  constructor() {
    this.events = {};
  }
  addListener(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }
  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => {
        callback(...args);
      });
    }
  }
}
