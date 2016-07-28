(function(){

  angular.module('app').controller('booksController', booksController);

  //this is the constructor, where is the books coming from?
  //oh, from the app.js, name convention
  function booksController(books, testService){
    var vm = this;
    vm.appName = books.appName;
    vm.serviceName = testService.serviceName;
  }
}());