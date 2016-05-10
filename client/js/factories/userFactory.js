angular.module('myApp');
myApp.factory('userFactory', function($http) {

	var factory = {};
	var user = {};

	factory.getStocks = function(symbol) {
		$http.get('http://www.google.com/finance/info?q=ba,aapl,msft,fb,googl,pg,px,mon,val,stld,f,tsla,cat,race,clx,whr,kmx,gt,an,tap,ko,nke,tsn,pm,amzn,cost,sbux,cmcsa,dis,ge,xom,cvx,cop,hal,wfc,bac,jpm,c,gs,mrk,pfe,cvs,mmm,wba,pypl,v,ebay,ma,fis,vz,t,ctl,wm,tmus,ups,aal,dal,fdx,alk').success(function (output) {
			stock = output;
			var result = stock.replace('//', ' ');
			var newBody = JSON.parse(result);
			stocks = [];
			for (var i = 0; i < newBody.length; i++) {
				
				
					stocks.push(newBody[i])
					// console.log(stocks[i]);

			}
			return stocks;
		})
	}

	factory.checkUser = function (info, callback) {
		$http.post('/checkUser', info).success(function (output) {
			factory.user = output;
			callback(factory.user);
		})
	}

	factory.addUser = function (info, callback) {
		$http.post('/addUser', info).success(function (output) {
			factory.user = output;
			callback(factory.user);
		})
	}

	factory.completeUser = function (user, interests, strategy, callback) {
		$http.post('/completeUser', {name: user.name, location: user.location, interest1: interests[0], interest2: interests[1], interest3: interests[2], strategy: strategy[0]}).success(function (output) {
			factory.user = output;
			callback(factory.user);
		})
	}

	factory.selectStocks = function (user, stocks, callback) {
		$http.post('/selectStocks', {stock1: stocks[0], stock2: stocks[1], stock3: stocks[2], stock4: stocks[3], stock5: stocks[4]}).success(function (output) {
			factory.user = output;
			callback(factory.user);
		})
	}

	factory.addQuantities = function (info, callback) {
		console.log(info)
		$http.post('/addQuantities', {stock1quantity: info.stock1quantity, stock2quantity: info.stock2quantity, stock3quantity: info.stock3quantity, stock4quantity: info.stock4quantity, stock5quantity: info.stock5quantity}).success(function (output) {
			factory.user = output;
			callback(factory.user);
		})
	}

	factory.buyStock = function (user, buyStocks, callback) {
		$http.post('/buyStock', {stock1buyprice: buyStocks[0], stock2buyprice: buyStocks[1], stock3buyprice: buyStocks[2], stock4buyprice: buyStocks[3], stock5buyprice: buyStocks[4]}).success(function (output) {
			factory.user = output;
			callback(factory.user)
			console.log(factory.user)
		})
	}

	factory.getUser = function (info, callback) {
		$http.post('/getUser', info).success(function (data) {
			callback(data);
		})
	}

	return factory;
});