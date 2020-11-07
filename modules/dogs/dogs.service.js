const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const dogs = new Queue()

store.dogs.forEach(dog => dogs.enqueue(dog))

// --------------------
module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    return dogs.show()
  },

  dequeue() {
    // Remove a pet from the queue.
    return dogs.dequeue()

  }
}
