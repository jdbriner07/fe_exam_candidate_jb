angular.module('dogCatcher')
.controller('randomController', function($scope, $http) {
	$scope.ctrl.randomDogCatch = function() {
		$http({
			method: 'GET',
			url: 'https://dog.ceo/api/breeds/image/random'
		}).then(function(response) {
			let breed = response.data.message.split('/')[5];
			$scope.ctrl.dogsCaught.unshift({breed: breed, picture: response.data.message});
		}, function(response) {
			console.log(response);
		})
	}
})
.directive('random', function() {
	return {
		scope: {
			dogsCaught: '<'
		},
		controller: 'randomController',
		controllerAs: 'ctrl',
		bindToController: true,
		templateUrl: 'templates/random.html'
	}
})