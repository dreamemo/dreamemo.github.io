var app = angular.module('dreamemo', ['ui.router']);

app.controller('MainCtrl', [
'$scope',
'$state',
function($scope, $state){
	
}]);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state('home', {
		url: '/index',
		templateUrl: '/index.html',
		controller: 'MainCtrl'
	});

	$urlRouterProvider.otherwise('home');
}]);