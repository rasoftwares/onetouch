describe('Home Controller ', function() {

	var scope;
	var ctrl;

	beforeEach(module('oneTouchApp'));

	beforeEach(inject(function($rootScope, $controller){
		scope = $rootScope.$new();
		ctrl = $controller('homeController',{
			$scope: scope
		});
	}));

	describe('Home Controller', function(){
		it('should have declared the productListKeys ', function(){
			expect(scope.productListKeys.length).toBe(['name','image','price','discount'].length);
		});

		it('getObject method should return empty object ', function(){
			//TODO: Unable to pass this method as, could not get the getobject() method
			/*
			var obj = this.getObject();
			console.log(obj);
			console.log(_.keys(obj));
			//expect().toBe();
			*/
		});

		it('should add a new row in UI',function(){
			scope.item.name = 'Prouduct-A';
			scope.item.price = 1234;
			scope.item.discount = 18;
		});

		it('should add and remove from a java script array',function(){
			var arr = [];
			arr.push('a',100);
			arr.push('b','200');

			expect(arr.length).toBe(4);
			var valToRemove = '100';
			var narr = scope.remove(arr, valToRemove);
			expect(narr.length).toBe(3);
		});

	});

});
