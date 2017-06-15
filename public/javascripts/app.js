var app = angular.module('tinoWIT', ['ui.router']);

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
			if(view) {
				$scope.changeView(view);
			}
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
	
	$scope.officers = [
	                   {name: "Sam Pal", position: "Co-President", image: "public/images/sam-pal.jpg", bio: "Hey fellow WIT!!! I'll be your co-president in charge of outreach this year and will do my way to reach out (heh) to provide you with rewarding and empowering experiences in tech. I've been involved in WIT for 2 years, and plan to continue for many more. Admittedly, I'm an avid binge watcher, food enthusiast, and insomniac. Nevertheless, I'm looking forward to a great year and ultimate progress in breaking the glass ceiling and bringing the gender gap in tech!"},
	                   {name: "Anika Bagga", position: "Co-President", image: "public/images/anika-bagga.jpg", bio: ""},
	                   {name: "Pallavi Narayanan", position: "Outreach Director", image: "public/images/pallavi-narayanan.jpg", bio: "Hi my name is Pallavi Narayanan and I will be one of your Outreach Directors this year! I will be teaching some simple skills to use on an Arduino Uno board, along with the programming. I hope to create as many opportunities as possible for members to see what it is like in the industry and talk to people who have gone through the same struggles. Feel free to give me any suggestions or ask me any questions!"},
	                   {name: "Vicky Min", position: "Outreach Director", image: "public/images/vicky-min.jpg", bio: "Hi, my name is Vicky and I will be one of the club's outreach officers this year! Besides designing the intro track for our WIT members this year, I will also be looking for guest speakers and opportunities outside of school to bring to our club closer together. Please feel free to approach me to ask any questions or just to talk. I look forward to meeting you!"},
	                   {name: "Rucha Patki", position: "Secretary/Treasurer", image: "public/images/rucha-patki.jpg", bio: "Hi, I'm Rucha and I'll be WIT's Secretary and Treasurer this year! I'll be managing the clubs activities and expenses. I've been with this club since its first year, and I love how it encourages more women to be involved in the field of computer science! Outside of this club, my hobbies include springboard and platform diving, robotics, and drawing."},
	                   {name: "Julia Liu", position: "Public Relations", image: "public/images/julia-liu.JPG", bio: "Hullo! My name is Julia Liu and I am a junior this year. As Public Relations, I am responsible for creating designs and promotional material as well as coding this website for Tino WIT. I had a great, refreshing experience being in the club last year and I hope to continue motivating and inspiring club members in computer science for the next two years at Tino. In the rare cases where I have freedom and free time, I like to immerse myself in music, dramas, or a good book. Don't be afraid to approach me and ask me any questions! (I don't byte.)"},
	                   {name: "Christina Shao", position: "Student Mentor", image: "public/images/christina-shao.jpg", bio: "I’m a sophomore at Tino and Student Mentor of the Women in Tech club. During club meetings, I help and support members of our club. Motivated by my passion for computer science and love for programming, I hope to spark an interest for computer science in girls and close the gender gap. Outside of school, I enjoy playing basketball and badminton, hiking, volunteering, sketching animals, and reading novels. But most of all, I love having fun, spending time with my friends and family, and helping others."},
	                   {name: "Nithya Attaluri", position: "Student Mentor", image: "public/images/nithya-attaluri.JPG", bio: "Hey! My name is Nithya Attaluri, and I will be one of your Student Mentors for 2016-2017 academic year! With my friend and co-officer Christina Shao, I will be designing the lesson plans for our meetings. I love to code, and by the end of the year, I hope many of the WIT members will too. When I’m not coding, though, I can be seen listening to music, (re)reading a novel, or playing table tennis with my brother. I'm looking forward to meeting all of you at WIT!"}
	                   ];

	$scope.template = "/tracks/intro.html";
	$scope.changeView = function(view) {
		$('.sidebar-tab').removeClass("active");
		$(document).ready(function() {
			if(view == "intro") {
				$scope.template = "/tracks/intro.html";
				$('#intro-tab').addClass("active");
			}
			if(view == "web") {
				$scope.template = "/tracks/web.html";
				$('#web-tab').addClass("active");
			}
			if(view == "mobile") {
				$scope.template = "/tracks/mobile.html";
				$('#mobile-tab').addClass("active");
			}
		});
	}
	$scope.posts = [
	                {name: ""},
	                {name: ""},
	                {name: ""},
	                ];
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