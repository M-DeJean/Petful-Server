const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue(),
  dequeue: function(type) {
    return this[type].dequeue()
  }
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------
module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    return {
      cats: pets.cats.show().value,
      dogs: pets.dogs.show().value
    }
  },

  dequeue(type) {
    // Remove a pet from the queue.
    pets.dequeue(type)

  }
}
