var app = angular.module('grievances', ['ngRoute', 'ngMaterial']);

app.config(function($routeProvider){

	$routeProvider
	.when('/', {
		templateUrl: '/Management/grievances.ejs'
	})

	.when('/post', {
		templateUrl: '/Management/post.ejs'
	})

	.when('/my-account', {
		templateUrl: '/Management/myaccount.ejs'
	})

	.when('/resetpassword', {
		templateUrl: '/Management/reset-password.ejs'
	})

	.when('/reports', {
		templateUrl: '/Management/reports.ejs'
	})

	.otherwise({
		template: 'Not found'
	});

});