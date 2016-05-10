var myApp = angular.module ('myApp', ['ngRoute', 'ngStorage']);

myApp.config(function ($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'static/partials/login.html',
	})

	.when('/completeprofile', {
		templateUrl: 'static/partials/completeProfile.html',
	})

	.when('/stocks', {
		templateUrl: '/static/partials/selectstocks.html'
	})

	.when('/buystocks', {
		templateUrl: '/static/partials/buystocks.html'
	})

	.when('/dashboard', {
		templateUrl: '/static/partials/userDashboard.html'
	})

	.otherwise({
		redirectTo: '/'
	});
});