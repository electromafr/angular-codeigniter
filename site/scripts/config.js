var staticHtlm = "application/views/static/";


angular.module('siteApp', ['ngRoute', 'ngAnimate', 'ngTouch' ,'site'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
    }).
    when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
    }).
    otherwise({
        redirectTo: '/',
        templateUrl: staticHtlm+'view1.html'
    });
}]);