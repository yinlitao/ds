function Vertex (label){
	this.label = label;
}

function Graph(v){
	this.vertices = v;
	this.edges = 0;
	this.adj = [];
	for(var i =0; i < this.vertices; i++){
		this.adj[i] = [];
		//this.adj[i].push("");
	}
	this.addEdge = addEdge;
	this.toString = toString;
	this.showGraph = showGraph;
	this.dfs = dfs;
	this.bfs = bfs;
	this.clearMarked = clearMarked;
	this.marked = [];
	for(var i = 0; i < this.vertices; i++){
		this.marked[i] = false;
	}
	
}

function addEdge(v, w){
	this.adj[v].push(w);
	this.adj[w].push(v);
	this.edges++;
}

function showGraph(){
	for(var i = 0; i < this.vertices; i++){
		console.log(i + " -> " );
		for(var j = 0; j < this.vertices; j++){
			if(this.adj[i][j] != undefined){
				console.log(this.adj[i][j] + ' ');
			}
		}
	
	}
	console.log();
}

function dfs(v){
	this.marked[v] = true;
	//if(this.adj[v] != undefined){
		console.log("dfs Visited vertex : " + v);
//	}
	//for(w in this.adj[v]){	
	for( var j = 0; j < this.adj[v].length; j++){
		var w = this.adj[v][j];
		if(!this.marked[w]){
			this.dfs(w);
		}

	}
}

function bfs(s){
	var queue = [];
	this.marked[s] = true;
	queue.push(s);
	while(queue.length > 0){
		var v = queue.shift();
		//console.log(" vertext v= " + v);
		//if(v != undefined){
			console.log("BFS Visited vertex: " + v);
		//}
		//console.log(this.adj[v]);
		
		for( j = 0; j < this.adj[v].length; j ++){
			var w = this.adj[v][j];
		//for (var w in this.adj[v]){

			if(!this.marked[w]){
				//this.edgeTo[w] = v;
				this.marked[w] = true;
				queue.push(w);
			}
		}

	//	console.log(queue);
	}

}

function clearMarked() {
	this.marked = [];

	for(var i = 0; i < this.vertices; i++){
		this.marked[i] = false;
	}
}

//var g = new Graph(7);
//g.addEdge(0,1);
//g.addEdge(0,5);
//g.addEdge(1, 2);
//g.addEdge(1,5);
//g.addEdge(2, 3);
//g.addEdge(2, 4);
//g.addEdge(3, 4);
//g.addEdge(4,5);
//g.addEdge(4,6);

var g = new Graph(9);
g.addEdge(0,8);
g.addEdge(0,2);
g.addEdge(1,2);
g.addEdge(1,8);
g.addEdge(1,7);
g.addEdge(2,3);
g.addEdge(3,4);
g.addEdge(3,8);
g.addEdge(4,5);
g.addEdge(5,6);
g.addEdge(5,8);
g.addEdge(6,7);



g.showGraph();
g.dfs(0);
g.clearMarked();
g.bfs(6);
