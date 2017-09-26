angular.module('dogCatcher')
.controller('searchController', function($scope, $http) {
	$scope.ctrl.dogToBeCaught = '';
	$scope.ctrl.errorMessage = '';
	$scope.ctrl.catchDog = function(dog) {
		dog = dog || $scope.ctrl.dogToBeCaught;
		if ($scope.ctrl.dogsList.indexOf(dog) < 0) {
			$scope.ctrl.errorMessage = 'Please specify a dog from the typeahead';
		} else {
			let dogArr = dog.split('-'), url;
			if (dogArr.length === 1) {
				url = `https://dog.ceo/api/breed/${dogArr[0]}/images/random`;
			} else {
				url = `https://dog.ceo/api/breed/${dogArr[0]}/${dogArr[1]}/images/random`;
			}
			$http({
				method: 'GET',
				url: url
			}).then(function(response) {
				if (response.data.status === 'success') {
					let breed = response.data.message.split('/')[5];
					$scope.ctrl.dogsCaught.unshift({breed: breed, picture: response.data.message});
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
			dogsCaught: '<',
			dogsList: '<'
		},
		controller: 'searchController',
		controllerAs: 'ctrl',
		bindToController: true,
		templateUrl: 'templates/search.html'
	}
})