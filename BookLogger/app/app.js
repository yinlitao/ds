(function(){
  var app = angular.module('app',['ngRoute']);

  app.config(function($provide){

    //service books definition
    $provide.provider("books",['constants', function(constants){
      this.$get = function(){

        var appName = constants.APP_TITLE;
        var appDesc = constants.APP_DESCRIPTION;
        var serviceVersion = constants.SERVCIE_VERSION;

        if(includeVersionInTitle){
          appName  += ' ' + serviceVersion;
        }

        return {
          appName : appName,
          appDesc : appDesc
        };
      };

      var includeVersionInTitle = false;
      this.setIncludeVersionInTitle = function(value){
          includeVersionInTitle = value;
      };

    }]);
  });

  app.config(['booksProvider', '$routeProvider', function(booksProvider,$routeProvider ){

    //console.log('title from constants service: ' + constants.APP_TITLE);
    //console.log(dataServiceProvider.$get);

    booksProvider.setIncludeVersionInTitle(true);

    $routeProvider
      .when('/',{
        templateUrl: '/app/templates/books.html',
        controller:'BooksController',
        controllerAs:'bookCtl'
      })
      .when('/AddBook', {
        templateUrl: '/app/templates/addBook.html',
        controller: 'AddBookController',
        controllerAs:'addBook'
      })
      .when('/EditBook/:bookID',{
        templateUrl: '/app/templates/editBook.html',
        controller: 'EditBookController',
        controllerAs: 'bookEditor'
      })
      .otherwise('/');

  }]);

}());
