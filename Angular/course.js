(function(){
	var app = angular.module('store',[]);
	app.controller('StoreController',function(){
		this.products = gems;
	});
	
	var gems = [{
		name:'Name',
		price:2.95,
		description: '...',
		canPurchase:false,
		soldOut:true
	},
	{
		name:'Name2',
		price:2.95,
		description: '...',
		canPurchase:false,
		soldOut:true
	}];
})();