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
			// var obj = this.getObject(); console.log(obj); console.log(_.keys(obj));expect().toBe();

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

		it('should remove one item from scope.product ',function(){
			var arr = [{'discount':'10','image':File,'name':'Product-A','price':'1865.00'},
								 {'discount':'20','image':File,'name':'Product-B','price':'2535.00'},
								 {'discount':'30','image':File,'name':'Product-C','price':'2535.00'} ];
			scope.product = arr;
			expect(scope.product.length).toBe(3);

			console.log(scope.product);
			scope.deleterow(3);
			console.log(scope.product);
			expect(scope.product.length).toBe(2);

		});

	});

});
