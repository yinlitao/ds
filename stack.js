function Stack(){
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.length = length;
	this.clear = clear;
}

function push (e){
	this.dataStore[this.top++] = e;
}

function pop(){
	return this.dataStore[--this.top];
}


function peek(){
	if(this.top > 0){
		return this.dataStore[this.top-1];
	
	}
}

function length(){
	return this.top;
}

function clear(){
	this.top = 0;
}

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length : " + s.length());

console.log(s.peek());

s.push("clayton");
console.log(s.pop());

console.log(s.pop());

s.clear();

function mulBase(num, base){
	do{
		s.push(num % base);
		num = Math.floor(num /= base);
	}while(num > 0);

	var converted = "";
	while (s.length() > 0) {
		converted += s.pop();
	}
	return converted;
}

var num = 32;
var base  = 2;

var newNum = mulBase(num, base);
console.log(num + " Converted to base " + base + " is " + newNum);

num = 125;
base = 8;

var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);


function isPalindrom(word){
	var s = new Stack();
	for (var i = 0; i < word.length; ++i) {
		s.push(word[i]);
	}

	var rword = "";
	while(s.length() > 0){
		rword+=s.pop();
	}

	if(word == rword) {
		return true;
	}
	else{
		return false;
	}
}

var word = "hello";

if(isPalindrom(word)){
	console.log(word + " is a palindrom.");
}
else{
	console.log(word + " is not a palindrom");
}

function factorial(n){
	if(n == 0){
		return 1;
	}
	else{
		return n * factorial(n-1);
	}
}

console.log(factorial(5));


function fact(n){
	var s = new Stack();
	while(n > 1){
		s.push(n --);
	}

	var product = 1;
	while (s.length() > 0) {
		product *= s.pop();
	}

	return product;
}

console.log(fact(5));


