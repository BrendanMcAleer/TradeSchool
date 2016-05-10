angular.module('myApp');
myApp.controller('userController', function ($scope, $http, $location, userFactory, $routeParams) {
	
	userFactory.getStocks($routeParams, function (data) {
		$scope.stocks = data;
	})

	$http.get('http://www.google.com/finance/info?q=ba,aapl,msft,fb,googl,pg,px,mon,val,stld,f,tsla,cat,race,clx,whr,kmx,gt,an,tap,ko,nke,tsn,pm,amzn,cost,sbux,cmcsa,dis,ge,xom,cvx,cop,hal,wfc,bac,jpm,c,gs,mrk,pfe,cvs,mmm,wba,pypl,v,ebay,ma,fis,vz,t,ctl,wm,tmus,ups,aal,dal,fdx,alk,intc')
	.then(function (data) {
		$scope.stock = data;
		$scope.newScope = $scope.stock['data'].replace('//', ' ')
		$scope.stockData = JSON.parse($scope.newScope)
		$scope.stocks = []
		for (var i = 0; i < $scope.stockData.length; i++) {
			$scope.stocks.push($scope.stockData[i]);
		}
		console.log($scope.stocks);
	});

	userFactory.getUser($routeParams, function (data) {
		$scope.user = data;
		console.log($scope.user)
	})

	$scope.interests = {
		basicindustries: false,
		capitalgoods: false,
		consumerdurables: false,
		consumernondurables: false,
		consumerservices: false,
		energy: false,
		finance: false,
		healthcare: false,
		miscellaneous: false,
		publicutilities: false,
		technology: false,
		transportation: false,
	};

	$scope.userInterests = [];

	$scope.strategy = {
		aggressive: false,
		conservative: false,
	};

	$scope.userStrategy = [];

	$scope.userStocks = [];

	$scope.createUser = function () {
		userFactory.addUser($scope.user, function (user) {
			$location.url('/completeprofile')
		});
	}

	$scope.getQuantities = function () {
		userFactory.getQuantities($scope.user, function (user) {

		})
	}

	$scope.loginUser = function() {
		userFactory.checkUser($scope.user, function (user) {
			if (user) {
				$location.url('/dashboard')
			} else {
				$location.url('/')
			}
		})
	}

	$scope.selectStocks = function(symbol) {
		

		if ($scope.userStocks.length < 5) {
			$scope.userStocks.push(symbol)
			console.log($scope.userStocks)
		}

		userFactory.selectStocks($scope.user, $scope.userStocks, function (user) {
			if (user) {
				console.log("Success")
			} else {
				$location.url('/stocks')
			}
		})
	}

	$scope.buyStocks = [];

	$scope.buyStock = function (price) {

		if ($scope.buyStocks.length < 5) {
			$scope.stockPrice = parseFloat(price);
			$scope.buyStocks.push($scope.stockPrice)
			console.log($scope.buyStocks)
		}

		userFactory.buyStock($scope.user, $scope.buyStocks, function (user) {
			if(user) {
				console.log("Buy Success")
			} else {
				$location.url('/stocks')
			}
		})
	}

	$scope.stockQuantities = [];

	$scope.addQuantities = function (new_stock) {
		console.log('here',new_stock)
		$scope.user.stock1quantity = new_stock.stock1quantity;
		$scope.user.stock2quantity = new_stock.stock2quantity;
		$scope.user.stock3quantity = new_stock.stock3quantity;
		$scope.user.stock4quantity = new_stock.stock4quantity;
		$scope.user.stock5quantity = new_stock.stock5quantity;
		console.log($scope.user)

		userFactory.addQuantities($scope.user, function (user) {
			if (user) {
				console.log('Added Quantities')
				$location.url('/dashboard')
			} else {
				$location.url('/buystocks')
			}
		})
	}

	// $scope.moveToDashboard = function() {
	// 	$location.url('/dashboard')
	// }

	$scope.proceed = function () {
		$location.url('/buystocks')
	}

	$scope.completeProfile = function () {
		if ($scope.interests.basicindustries) {
			$scope.userInterests.push("basicindustries")
		}

		if ($scope.interests.capitalgoods) {
			$scope.userInterests.push("capitalgoods")
		}

		if ($scope.interests.consumerdurables) {
			$scope.userInterests.push("consumerdurables")
		}

		if ($scope.interests.consumernondurables) {
			$scope.userInterests.push("consumernondurables")
		}

		if ($scope.interests.consumerservices) {
			$scope.userInterests.push('consumerservices')
		}

		if ($scope.interests.energy) {
			$scope.userInterests.push('energy')
		}

		if ($scope.interests.finance) {
			$scope.userInterests.push('finance')
		}

		if ($scope.interests.healthcare) {
			$scope.userInterests.push('healthcare')
		}

		if ($scope.interests.miscellaneous) {
			$scope.userInterests.push('miscellaneous')
		}

		if ($scope.interests.publicutilities) {
			$scope.userInterests.push('publicutilities')
		}

		if ($scope.interests.technology) {
			$scope.userInterests.push('technology')
		}

		if ($scope.interests.transportation) {
			$scope.userInterests.push('transportation')
		}

		console.log($scope.userInterests)

		if ($scope.strategy.aggressive) {
			$scope.userStrategy.push('aggressive')
		}

		if($scope.strategy.conservative) {
			$scope.userStrategy.push('conservative')
		}

		console.log($scope.userStrategy);

		userFactory.completeUser($scope.user, $scope.userInterests, $scope.userStrategy, function (user) {
			if (user) {
				$location.url('/stocks')
			} else {
				$location.url('/completeprofile')
			}
		})
	}

});