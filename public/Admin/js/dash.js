var app1 = angular.module('grievances', ['ngRoute']);

app1.config(function($routeProvider){

	$routeProvider
	.when('/', {
		templateUrl: '../admin/myaccount.html',
		//controller:'grievances'
	})

	.when('/grievances', {
		templateUrl: '../admin/grievances.html',
		//controller:'grievances'
	})

	.when('/resetpassword', {
		templateUrl: '../admin/reset-password.html'
	})

	.when('/reports', {
		templateUrl: '../admin/reports.html'
	})

	.otherwise({
		template: 'Not found'
	});

});