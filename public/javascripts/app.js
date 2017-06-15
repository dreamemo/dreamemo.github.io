var app = angular.module('dreamemo', ['ui.router']);

app.controller('MainCtrl', [
'$scope',
'$state',
function($scope, $state){
	$scope.go = function(option, view) {
		$('.header-tab').removeClass("active");
		$('.home-icon').removeClass("active");
		if(option == "home") {
			$state.go("home");
			$('.home-icon').css({"color": "red"});
		} else if(option == "about-us") {
			$state.go("aboutus");
			$('#aboutus-tab').addClass("active");
		} else if(option == "tracks") {
			$state.go("tracks");
			$('#tracks-tab').addClass("active");
		} else if(option == "blog") {
			$state.go("blog");
			$('#blog-tab').addClass("active");
		} else if(option == "resources") {
			$state.go("resources");
			$('#resources-tab').addClass("active");
		} else if(option == "login") {
			$state.go("login");
			$('#login-tab').addClass("active");
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
	.state('aboutus', {
		url: '/aboutus',
		templateUrl: '/aboutus.html',
		controller: 'MainCtrl'
	})
	.state('tracks', {
		url: '/tracks',
		templateUrl: '/tracks.html',
		controller: 'MainCtrl'
	})
	.state('blog', {
		url: '/blog',
		templateUrl: '/blog.html',
		controller: 'MainCtrl'
	})
	.state('resources', {
		url: '/resources',
		templateUrl: '/resources.html',
		controller: 'MainCtrl'
	})
	.state('login', {
		url: '/login',
		templateUrl: '/login.html',
		controller: 'MainCtrl'
	});

	$urlRouterProvider.otherwise('home');
}]);