(function(){

  angular.module('app').controller('booksController', ['books', 'testService', 'dataService', 'logger', 'badgeService',booksController]);

  //this is the constructor, where is the books coming from?
  //oh, from the app.js, name convention
  function booksController(books, testService, dataService, logger, badgeService){
    var vm = this;
    vm.appName = books.appName;
    vm.serviceName = testService.serviceName;
    //vm.allBooks = dataService.getAllBooks();
    dataService.getAllBooks()
      .then(getBooksSuccess, null, getBooksNotification)
      .catch(errorCallback)
      .finally(getAllBooksComplete);

    //vm.allReaders = dataService.getAllReaders();

    dataService.getAllReaders()
      .then(getAllReadersSuccess)
      .catch(errorCallback)
      .finally(getAllReadersComplete);


    function getAllReadersSuccess(readers){
      vm.allReaders = readers;
    }

    function getAllReadersComplete(){
      console.log('getAllReaders has completed');
    }

    
    vm.getBadge = badgeService.retrieveBadge;

    logger.output('booksController as been created');

    function getBooksSuccess(books){
      vm.allBooks = books;
    }

    function getBooksError(reason){
      console.log(reason);
    }

    function errorCallback(message){
      console.log('Error Message: ' + message);
    }

    function getAllBooksComplete(){
      console.log('getAllBooks has completed');
    }

    function getBooksNotification(notification){
      console.log('Promise notification : ' + notification);

    }
  }
}());
