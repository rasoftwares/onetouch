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

	describe('Configurations in navcontroller.js', function(){
		it('should have applicaiton name defined',function(){
			expect(scope.applicationName).toBe('One Touch Apps');
		});

		it('should have declared menu items', function(){
			expect(scope.menuItems.length).toBe(3);
		});

		it('should have disabled search feature', function(){
			expect(scope.enableSearch).toBe(false);
		});

		it('should have declared search title', function(){
			expect(scope.search_title).toBe('GO');
		});

	});

});
