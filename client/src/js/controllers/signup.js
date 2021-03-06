angular.module('gokibitz.controllers')
.controller('SignupController', function ($rootScope, $scope, $modalInstance, Auth, $location, locker) {
	$scope.error = {};
	$scope.user = {};

	$scope.register = function (form) {
		//console.log('register function', form, $scope.user);
		Auth.createUser({
			email: $scope.user.email,
			username: $scope.user.username,
			password: $scope.user.password
		},
		function (err) {
			$scope.errors = {};

			if (!err) {
				locker.put('email', $scope.user.email);
				$modalInstance.close($scope.user);
			} else {
				angular.forEach(err.errors, function (error, field) {
					form[field].$setValidity('mongoose', false);
					$scope.errors[field] = error.message;
				});
			}
		});
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
});
