(function(){
  var app = angular.module('app',[]);

  app.config(function($provide){

    $provide.provider("books",['constants', function(constants){
      this.$get = function(){

        var appName = constants.APP_TITLE;
        var appDesc = constants.APP_DESCRIPTION;

        return {
          appName : appName,
          appDesc : appDesc
        };
      };
    }]);
  });

  //actually, the service will be added provider at the end of the service name
  app.provider("testService", ['constants', function(constants){
    this.$get=function(){
      var serviceName = constants.SERVCIE_NAME;
      var serviceVersion = constants.SERVCIE_VERSION;

      if(includeVersionInTitle){
        serviceName  += ' ' + serviceVersion;
      }

      return{
        serviceName : serviceName
      }
    };

    var includeVersionInTitle = false;
    this.setIncludeVersionInTitle = function(value){
        includeVersionInTitle = value;
    };
  }]);

  app.config(['testServiceProvider','constants','dataServiceProvider', function(testServiceProvider, constants, dataServiceProvider){
    testServiceProvider.setIncludeVersionInTitle(true);

    console.log('title from constants service: ' + constants.APP_TITLE);
    console.log(dataServiceProvider.$get);
  }]);

}());
