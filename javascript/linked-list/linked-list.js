var Node = function(value, next, previous) {
  this.value = value;
  this.next = next;
  this.previous = previous;
}

var LinkedList = function() {
  this.first = null;
  this.last = null;
};

LinkedList.prototype.push = function(value) {
  var lastNode = this.last;
  var firstNode = this.first;
  var newNode = new Node(value, null, lastNode);
  if (lastNode) {
    lastNode.next = newNode;
  }
  if (!firstNode){
    this.first = newNode;
  }
  this.last = newNode;
};

LinkedList.prototype.pop = function() {
  var popped = this.last;
  this.last = this.last.previous;
  return popped.value;
};

LinkedList.prototype.shift = function() {
  var unshifted = this.first;
  this.first = this.first.next;
  return unshifted.value;
};

LinkedList.prototype.unshift = function(value) {
  var firstNode = this.first;
  var lastNode = this.last;
  var newNode = new Node(value, firstNode, null);
  if (firstNode) {
    firstNode.previous = newNode;
  }
  if (!lastNode){
    this.last = newNode;
  }
  this.first = newNode;
};

LinkedList.prototype.count = function() {
  var firstNode = this.first;
  var nextNode = firstNode;
  var count = 0;
  while (nextNode != null){
    count++;
    nextNode = nextNode.next;
  }
  return count;
};

LinkedList.prototype.delete = function(value) {
  var currentNode = this.last;

  if (currentNode.previous == null){
    this.first = null;
    this.last = null;
    return;
  }

  while (currentNode != null && currentNode != this.first){
    if (currentNode.value === value){
      var previousNode = currentNode.previous;
      var nextNode = currentNode.next;
      previousNode.next = nextNode;
      nextNode.previous = previousNode;
      return;
    }
    currentNode = currentNode.previous;
  }
};

module.exports = LinkedList;
