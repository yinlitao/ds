(function(){
  var app = angular.module('app',[]);

  app.config(function($provide){

    $provide.provider("books", function(){
      this.$get = function(){

        var appName = 'Book Logger';
        var appDesc = 'Track which books you read';

        return {
          appName : appName,
          appDesc : appDesc
        };
      };
    });
  });

  //actually, the service will be added provider at the end of the service name
  app.provider("testService", function(){
    this.$get=function(){
      var serviceName = 'test Service';
      var serviceVersion = '1.0';

      if(includeVersionInTitle){
        appName  += ' ' + serviceVersion;
      }

      return{
        serviceName : serviceName
      }
    };

    var includeVersionInTitle = false;
    this.setIncludeVersionInTitle = function(value){
        includeVersionInTitle = value;
    };
  });

  app.config(function(testServiceProvider){
    testServiceProvider.setIncludeVersionInTitle(true);
  });

}());
