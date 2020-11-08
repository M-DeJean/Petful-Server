const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const cats = new Queue()

store.cats.forEach(cat => cats.enqueue(cat))

// --------------------
module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    return cats.show()
  },
  enqueue(cat) {

    //Add dog to the back of line
    return cats.enqueue(cat)
  },
  dequeue() {
    // Remove a pet from the queue.
    return cats.dequeue()

  }
}
