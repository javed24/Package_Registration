const myApp = angular.module('myApp', ['ngRoute'])
.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}])
.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
            controller: 'MainController',
            templateUrl: 'views/main.html'
        })
        .when('/signup', {
            controller:'SignUpController',
            templateUrl: 'views/signup.html'

        })
        .otherwise({
            redirectTo: '/'
        })
}])
