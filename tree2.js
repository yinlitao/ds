function Node(data, left, right){
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}

function show (){
	return this.data;
}

function BST(){
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
	this.preOrder= preOrder;
	this.postOrder = postOrder;
	this.getMin = getMin;
	this.getMax = getMax;
	this.find = find;
}

function insert (data){
	var n = new Node(data, null, null);
	if(this.root== null){
		this.root = n;
	}
	else{
		var current = this.root;
		var parent;
		while(true){
			parent = current;
			if(data < current.data){
				current = current.left;
				if(current == null){
					parent.left = n;
					break;
				}
			}
			else{
				current = current.right;
				if(current == null){
					parent.right = n;
					break;
				}
			}
		}
	}
}


function inOrder(node){
	if(!(node == null)){
		inOrder(node.left);
		console.log(node.show() + " ");
		inOrder(node.right);
	}
}

function preOrder(node){
	if(!(node == null)){
		console.log(node.show() + " ");
		preOrder(node.left);
		preOrder(node.right);
	}
}

function postOrder(node){
	if(!(node == null)){
		postOrder(node.left);
		postOrder(node.right);
		console.log(node.show() + " ");
	}
}


function getMin(){
	var current = this.root;
	while(!(current.left == null)){
		current = current.left;
	}
	return current.data;
}

function getMax(){
	var current = this.root;
	while(!(current.right == null)){
		current = current.right;
	}
	return current.data;
}

function find(data){
	var current = this.root;
	while(current.data != data){
		if(data < current.data){
			current = current.left;
		}
		else {
			current = current.right;
		}

		if(current == null){
			return null;
		}
	}
	return current;
}



var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

nums.insert(2);
nums.insert(1);
nums.insert(199);
nums.insert(200);
nums.insert(56);
nums.insert(87);

console.log(nums);
console.log();
console.log("Inorder traversal: ");
inOrder(nums.root);
console.log("PostOrder traversal: ");
postOrder(nums.root);

console.log("preOrder traversal: ");
preOrder(nums.root);

console.log(nums.getMin());
console.log(nums.getMax());

var found = nums.find(37);
if(found != null){
	console.log(found);
}
else{
	console.log("not found");
}


