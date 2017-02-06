describe('Navigation Controller ', function() {

	var scope;
	var ctrl;

	beforeEach(module('oneTouchApp'));

	beforeEach(inject(function($rootScope, $controller){
		scope = $rootScope.$new();
		ctrl = $controller('navController',{
			$scope: scope
		});
	}));

	describe('Navigation Controller', function(){
		it('should not have a empty value for application name',function(){
			expect(scope.applicationName).not.toBe('');
		});
	});

});
