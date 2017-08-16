/*
  the Node Class constructor
*/
function Node(data, left, right) {
  this.data = data;
  this.count = 1;
  this.left = left;
  this.right = right;

  this.show = show;
}

function show() {
  return this.data;
}

// Binary Search Tree
function BST() {
  this.root = null;

  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
  this.insert = insert;
  this.find = find;
  this.remove = remove;
  this.update = update;
}

/* 
  insert a new node into the BST
  @params: data: the new value to be inserted
*/
function insert(data) {
  var newNode = new Node(data, null, null);
  
  if (!this.root) {
    this.root = newNode;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current      
      if (data < current.data) {
        current = current.left;
        if (current === null) {
          parent.left = newNode;        
          break;
        }
      } else {
        current = current.right;
        if (current === null) {
          parent.right = newNode;
          break;
        }
      }
    }
  }
}

/*
  in order traverse
  @params: node: from where to begin
*/
function inOrder(node) {
  if (node !== null) {
    inOrder(node.left);
    putstr(node.show() + ' ');
    inOrder(node.right);
  }
}

/*
  pre order traverse
  @params: node: from where to begin
*/
function preOrder(node) {
  if (node !== null) {
    putstr(node.show() + ' ');
    preOrder(node.left);
    preOrder(node.right);
  }
}

/*
  post order traverse
  @params: node: from where to begin
*/
function postOrder(node) {
  if (node !== null) {
    postOrder(node.left);
    postOrder(node.right);
    putstr(node.show() + ' ');
  }
}

/*
  get the node which has the minimum value
  @params: node: from where to begin
*/
function getMin(node) {
  while (node.left !== null) {
    node = node.left;
  }
  return node.data;
}

/*
  get the node which has the maximum value
  @params: node: from where to begin
*/
function getMax(node) {
  while (node.right !== null) {
    node = node.right;
  }
  return node.data;
}

/*
  find the node according to the value
  @params: data: the value provided
*/
function find(data) {
  var current = this.root;
  while (current !== null) {
    if (data === current.data) {
      return current;
    } else if (data < current.data) {
      current = current.left;
    } else {
      current = current.right
    }
  }
  return null;
}

/*
  remove the node according to value
  @params: data: the value provided
*/
function remove(data) {
  this.root = removeNode(this.root, data);
}

function removeNode(node, data) {
  if (node === null) return null;
  if (node.data === data) {
    if (!node.left && !node.right) {
      return null;
    }
    if (!node.left) {
      return node.right;
    }
    if (!node.right) {
      return node.left;
    }
    // has two child nodes
    var tempNode = getMin(node.right); // or getMax(node.left)
    node.data = tempNode.data;
    // remove the tempNode from the right tree
    // or if you used getMax(node.left), you should write:
    // node.left = removeNode(node.left, tempNode.data)
    node.right = removeNode(node.right, tempNode.data);
  }
  else {
    if (data < node.data) {
      node.left = removeNode(node.left, data);
    }
    else {
      node.right = removeNode(node.right, data);
    }
    return node;
  }
}

/*
  update the "count" property of the node according to its value
  @params: data: the value provided
*/
function update(data) {
  var node = this.find(data);
  node.count++;
  return node;
}
