var testApp = angular.module('testApp', []);
testApp.filter('unsafe', function($sce) {
  return function(val) {
      return $sce.trustAsHtml(val);
  };
});