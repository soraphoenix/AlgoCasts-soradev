// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};
  }
  
  // Register an event handler
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      for (let cb of this.events[eventName]) {
        cb();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName];
  }
}

module.exports = Events;

// class Events {
//   // Create a constructor to set a property to store the event names
//   // as keys in an object. Their associated callback functions will
//   // be stored as elements in an array.
//   constructor() {
//     this.events = {};
//   }
//   // Register an event handler
//   on(eventName, callback) {
//     // Set a conditional to create the key and array for the event name 
//     // in case it does not exist
//     if(this.events[eventName]) {
//       // Push the callback into the array if it already exists
//       this.events[eventName].push(callback);
//     } else {
//       // Create a key/value pair in the events object containing the callback
//       // as an array element if the event name does not already exist in the
//       // object.
//       this.events[eventName] = [callback];
//     }
//   }

//   // Trigger all callbacks associated
//   // with a given eventName
//   trigger(eventName) {
//     // Run a for loop to execute each call back at each index if
//     // the key for the event name exists
//     if(this.events[eventName]) {
//       for(let cb of this.events[eventName]) {
//         cb();
//       }
//     }
//   }

//   // Remove all event handlers associated
//   // with the given eventName
//   off(eventName) {
//     // Remove the key matching the event name from the events object
//     delete this.events[eventName];
//   }
// }