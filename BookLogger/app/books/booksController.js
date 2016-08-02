(function(){

  angular.module('app').controller('BooksController', ['books', 'dataService', 'logger', 'badgeService',BooksController]);

  //this is the constructor, where is the books coming from?
  //oh, from the app.js, name convention
  function BooksController(books, dataService, logger, badgeService){
    var vm = this;
    vm.appName = books.appName;
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

    logger.output('BooksController as been created');

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
