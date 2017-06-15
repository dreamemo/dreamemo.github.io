var app = angular.module('dreamemo', ['ui.router']);

app.controller('MainCtrl', [
'$scope',
'$state',
function($scope, $state){
	$scope.go = function(option, view) {
		$('.header-tab').removeClass("active");
		if(option == "home") {
			$state.go("home");
		} else if(option == "about") {
			$state.go("about");
			$('#about-tab').addClass("active");
		} else if(option == "faq") {
			$state.go("faq");
			$('#faq-tab').addClass("active");
		} else if(option == "contact") {
			$state.go("contact");
			$('#contact-tab').addClass("active");
		}
	}
}]);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: '/home.html',
		controller: 'MainCtrl'
	})
	.state('about', {
		url: '/about',
		templateUrl: '/about.html',
		controller: 'MainCtrl'
	})
	.state('faq', {
		url: '/faq',
		templateUrl: '/faq.html',
		controller: 'MainCtrl'
	})
	.state('contact', {
		url: '/contact',
		templateUrl: '/contact.html',
		controller: 'MainCtrl'
	});

	$urlRouterProvider.otherwise('home');
}]);