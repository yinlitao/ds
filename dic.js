function Dictionary(){
	this.dataStore = new Array();
	this.add= add;
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
}

function add(key, value){
	this.dataStore[key] = value;
	console.log(key);
	console.log(value);
	console.log(this.dataStore[key]);
}

function find(key){
	return this.dataStore[key];
}

function remove(key) {
	delete this.dataStore[key];
}

function showAll(){
	console.log(Object.keys(this.dataStore));
	console.log();

	var ar = this.dataStore;
	//var i = 0;
	Object.keys(ar).sort().forEach(function(k){
		console.log(k + " -> " + ar[k]);
	});

//	for (var key in Object.keys(this.dataStore)){
//		console.log(key);
//		console.log();
	//this.dataStore.forEach(function(entry){	
//		console.log(key + " -> " + this.dataStore[key]);
//	};

	
	
}


var pbook = new Dictionary();
pbook.add("Mike", "123");
pbook.add("David", "234");
pbook.add("Cythia", "333");
pbook.add("david'ex t", "333");

pbook.showAll();

