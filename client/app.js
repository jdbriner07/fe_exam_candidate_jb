angular.module('dogCatcher', ['ui.bootstrap'])
.controller('appController', function($scope, $http) {
	$scope.ctrl.dogsList = [];
	$scope.ctrl.dogsCaught = [];
	$http({
		method: 'GET',
		url: 'https://dog.ceo/api/breeds/list/all'
	}).then(function(response) {
		let dogs = response.data.message;
		for (let key in dogs) {
			if (!dogs[key].length) {
				$scope.ctrl.dogsList.push(key)
			} else {
				for (let i = 0; i < dogs[key].length; i++) {
					$scope.ctrl.dogsList.push(key + '-' + dogs[key][i])
				}
			}
		}
	}, function(response) {
		console.log(response);
	})
	$scope.ctrl.clearDogs = function() {
		$scope.ctrl.dogsCaught = [];
	}
})
.directive('app', function() {
	return {
		scope: {},
		controller: 'appController',
		controllerAs: 'ctrl',
		bindToController: true,
		templateUrl: 'templates/app.html'
	}
})