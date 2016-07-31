(function(){

  angular.module('app').controller('booksController', ['books', 'testService', 'dataService', 'logger', 'badgeService',booksController]);

  //this is the constructor, where is the books coming from?
  //oh, from the app.js, name convention
  function booksController(books, testService, dataService, logger, badgeService){
    var vm = this;
    vm.appName = books.appName;
    vm.serviceName = testService.serviceName;
    vm.allBooks = dataService.getAllBooks();
    vm.allReaders = dataService.getAllReaders();
    vm.getBadge = badgeService.retrieveBadge;

    logger.output('booksController as been created');
  }
}());
