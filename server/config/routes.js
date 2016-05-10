var users = require('../controllers/usersController.js');

module.exports = function (app) {

	app.get('#/', function (req, res) {
		users.index(req, res);
	})

	app.post('/addUser', function (req, res) {
		users.add(req, res);
	})

	app.get('/getStocks', function (req, res) {
		users.getStocks(req, res);
	})

	app.post('/checkUser', function (req, res) {
		users.checkUser(req, res);
	})

	app.post('/getUser', function (req, res) {
		users.getUser(req, res);
	})

	app.post('/completeUser', function (req, res) {
		users.complete(req, res);
	})

	app.get('#/completeprofile', function (req, res) {
		users.profile(req, res);
	})

	app.get('#/stocks', function (req, res) {
		users.stocks(req, res);
	})

	app.post('/selectStocks', function (req, res) {
		users.selectStocks(req, res);
	})

	app.post('/buyStock', function (req, res) {
		users.buyStock(req, res);
	})

	app.post('/addQuantities', function (req, res) {
		users.addQuantity(req, res);
	})

	app.get('#/buyStocks', function (req, res) {
		users.buystocks(req, res)
	})

	app.get('#/dashboard', function (req, res) {
		users.dashboard(res, req);
	})
}