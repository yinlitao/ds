function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = [];
	this.clear = clear;
	this.find = find;
	this.toString = toString;
	this.insert = insert;
	this.append = append;
	this.remvoe = remove;
	this.front = front;
	this.end= end;
	this.prev = prev;
	this.next = next;
	this.length = length;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.contains = contains;
};

function append(e){
	this.dataStore[this.listSize++] = e;
}

function find (e){
	for (var i = 0; i < this.dataStore.length; ++i){
		if(this.dataStore[i] == element){
			return i;
		}
	}
	reutrn -1;
}

function remove(e){
	var foundAt = this.find(e);
	if(foundAt > -1){
		this.dataStore.splice(foundAt, 1);
		return true;
	}
	return false;
}

function length(){
	return this.listSize;
}

function toString(){
	return this.dataStore;
}

function insert(e, after){
	var insertPos = this.find(after);
	if(insertPos > -1){
		this.dataStore.splice(insertPos+1, 0, e);
		++this.listSize;
		return true;
	}
	return false;
}

function clear(){
	delete this.dataStore;
	this.dataStore = [];
	this.listSize = this.pos = 0;
}

function contains(e){
	for(var i = 0; i < this.dataStore.length; i++){
		if(this.dataStore[i] == e){
			return true;
		}
	}
	return false;
}


function front(){
	this.pos= 0;
}

function end(){
	this.pos = this.listSize -1;
}

function prev(){
	if(this.pos > 0){
		this.pos--;
	}
}

function next (){
	if(this.pos < this.listSize -1){
		++this.pos;
	}
}

function currPos(){
	return this.pos;
}

function moveTo(posNew){
	this.pos = posNew;
}

function getElement(){
	return this.dataStore[this.pos];
}



var names = new List();

names.append("add");
names.append("raymond");
names.append("barbar");
names.append("thing");
names.append("lst lasd");
names.append("thde skek");
names.append("thii dds");



console.log(names.toString());

names.front();

console.log(names.getElement());

names.next();

console.log(names.getElement());

names.next();

names.next();

console.log(names.getElement());






