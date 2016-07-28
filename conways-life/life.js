(function(){
  var _ = self.Life = function(seed){
    this.seed = seed;
    this.height = seed.length;
    this.width = seed[0].length;

    this.prevBoard = [];
    this.board = cloneArray(seed);
  };

  _.prototype = {
    next: function(){
      this.prevBoard = cloneArray(this.board);

      for(var y = 0; y < this.height; y++){
        for(var x = 0; x < this.width; x++){
          var neighbors = this.aliveNeighbors(this.prevBoard, x, y);
          var alive = !!this.board[y][x];

          if(alive){
            if(neighbors < 2 || neighbors > 3){
              this.board[y][x] =0;
            }
          }
          else{
            if(neighbors == 3){
              this.board[y][x] = 1;
            }
          }
          //console.log(x, y, + ':' +neighbors);
        }
      }
    },

    aliveNeighbors: function(array, x, y){
      var sum = 0;
      var prevRow = array[y-1] || [];
      var nextRow = array[y+1] || [];

      var neighbors = [
        prevRow[x-1], prevRow[x], prevRow[x+1],
        array[y][x-1], array[y][x+1],
        nextRow[x-1], nextRow[x], nextRow[x+1]
      ].forEach(function (a){
        sum += +!!a;
      });
    },

    toString: function(){
      return this.board.map(function(row){return row.join(' ');}).join('\n');
    }
  };

  function cloneArray(array){
    return array.slice().map(function(row){
      return row.slice();
    })
  }
})();

var game = new Life ([
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0]
]);

console.log("begin the game");

console.log(game + '');

game.next();
//game.aliveNeighbors();

console.log(game + '');
