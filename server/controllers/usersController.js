var mongoose = require('mongoose');
var User = mongoose.model('User');
var request = require('request');
var rp = require('request-promise');

module.exports = {

	index: function (req, res) {
		res.render('static/partials/login.html')
	},

	add: function (req, res) {
		var user = new User({email: req.body.email, password: req.body.password});
		user.save(function (err) {
			if (err) {
				console.log (err)
			} else {
				res.json(user);
			}
		})
	},

	checkUser: function (req, res) {
		User.findOne({email: req.body.email}, function (err, user) {
			if (err) {
				console.log(err);
			} else {
				res.json(user);
			}
		})
	},

	getUser: function (req, res) {
		User.findOne({name: 'Brendan'}, function (err, user) {
			if (err) {
				console.log (err)
			} else {
				res.json(user);
			}
		})
	},

	complete: function (req, res) {
		console.log(req.body);
		User.update({}, {name: req.body.name, location: req.body.location, interest1: req.body.interest1, interest2: req.body.interest2, interest3: req.body.interest3, strategy: req.body.strategy, balance: 10000, trades: 0}, function (err, user) {
			if (err) {
				console.log(err);
			} else {
				res.json(user);
			}
		})
	},

	selectStocks: function (req, res) {
		User.update({}, {stock1: req.body.stock1, stock2: req.body.stock2, stock3: req.body.stock3, stock4: req.body.stock4, stock5: req.body.stock5}, function (err, user) {
			if (err) {
				console.log(err);
			} else {
				res.json(user);
			}
		})
	},

	buyStock: function (req, res) {
		console.log(req.body);
		User.update({}, {stock1buyprice: req.body.stock1buyprice, stock2buyprice: req.body.stock2buyprice, stock3buyprice: req.body.stock3buyprice, stock4buyprice: req.body.stock4buyprice, stock5buyprice: req.body.stock5buyprice}, function (err, user) {
			if (err) {
				console.log(err)
			} else {
				res.json(user);
			}
		})
	},

	addQuantity: function (req, res) {
		User.update({}, {stock1quantity: req.body.stock1quantity, stock2quantity: req.body.stock2quantity, stock3quantity: req.body.stock3quantity, stock4quantity: req.body.stock4quantity, stock5quantity: req.body.stock5quantity}, function (err, user) {
			if(err) {
				console.log("server error")
				console.log(err)
			} else {
				res.json(user);
			}
		})
	},

	getStocks: function(req, res) {

		request('www.google.com/finance/info?q=ba,aapl,msft,fb', function (err, data, body) {
			console.log(body);
		});
		// function getStockInfo (i, stockInfo, callback) {
		// 	var stocks = ['ba'];
		// 	//  , 'aapl', 'msft', 'googl', 'fb', 'intc', 'pg', 'px', 'mon', 'val', 'stld', 'f', 'tsla', 'cat', 'race', 'clx', 'whr', 'kmx', 'gt', 'an', 'tap', 'ko', 'nke', 'tsn', 'pm', 'amzn', 'cost', 'sbux', 'cmcsa', 'dis', 'ge', 'xom', 'cvx', 'cop', 'hal', 'wfc', 'bac', 'jpm', 'c', 'gs', 'mrk', 'pfe', 'cvs', 'mmm', 'wba', 'pypl', 'v', 'ebay', 'ma', 'fis', 'vz', 't', 'ctl', 'wm', 'tmus', 'ups', 'aal', 'dal', 'fdx', 'alk'
		// 	if (!i) {
		// 		i = 0;
		// 	}
		// 	if (!stockInfo) {
		// 		stockInfo = [];
		// 	}

		// 	if (i == stocks.length) {
		// 		callback(stockInfo);
		// 	}

		// 	request('www.google.com/finance/info?q=' + stocks[i], function (err, data, body) {
		// 			stockInfo.push(body);
		// 			getStockInfo(i + 1, stockInfo, callback)
		// 			return stockInfo;
		// 	});
		// }

		// getStockInfo(0, [], function (result) {
		// 	res.json(result);
		// });
	},

	profile: function (req, res) {
		res.render('static/partials/completeProfile.html')
	},

	stocks: function(req, res) {
		res.render('static/partials/selectstocks.html')
	},

	buystocks: function(req, res) {
		res.render('static/partials/buystocks.html')
	},

	dashboard: function(req, res) {
		res.render('static/partials/userDashboard.html')
	},
}