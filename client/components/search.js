angular.module('dogCatcher')
.controller('searchController', function($scope, $http) {
	$scope.ctrl.dogToBeCaught = '';
	$scope.ctrl.errorMessage = '';
	$scope.ctrl.catchDog = function() {
		if (!$scope.ctrl.dogToBeCaught) {
			$scope.ctrl.errorMessage = 'Please specify a dog';
		} else {
			let dog = $scope.ctrl.dogToBeCaught.split('-'), url;
			if (dog.length === 1) {
				url = `https://dog.ceo/api/breed/${dog[0]}/images/random`;
			} else {
				url = `https://dog.ceo/api/breed/${dog[0]}/${dog[1]}/images/random`;
			}
			$http({
				method: 'GET',
				url: url
			}).then(function(response) {
				if (response.data.status === 'success') {
					let breed = response.data.message.split('/')[5];
					$scope.ctrl.dogsCaught.push({breed: breed, picture: response.data.message});
					$scope.ctrl.errorMessage = '';
				} else {
					$scope.ctrl.errorMessage = 'That breed doesn\'t exist!';
				}
			}, function(response) {
				console.log(response);
			})
			$scope.ctrl.dogToBeCaught = '';
		}
	}
})
.directive('search', function() {
	return {
		scope: {
			dogsCaught: '=',
			dogsList: '<'
		},
		controller: 'searchController',
		controllerAs: 'ctrl',
		bindToController: true,
		templateUrl: 'templates/search.html'
	}
})