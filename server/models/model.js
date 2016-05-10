var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema ({
	name: String,
	email: String,
	password: String,
	location: String,
	interest1: String,
	interest2: String,
	interest3: String,
	balance: Number,
	strategy: String,
	trades: Number,
	change: Number,
	stock1: String,
	stock1quantity: Number,
	stock1buyprice: Number,
	stock2: String,
	stock2quantity: Number,
	stock2buyprice: Number,
	stock3: String,
	stock3quantity: Number,
	stock3buyprice: Number,
	stock4: String,
	stock4quantity: Number,
	stock4buyprice: Number,
	stock5: String,
	stock5quantity: Number,
	stock5buyprice: Number,
	
}, {timestamps: true})
mongoose.model('User', UserSchema);

var StockSchema = new mongoose.Schema ({
	company: String,
	symbol: String,
	category: String,
	lastPrice: Number,
	change: Number,
	changePercent: Number,
	openPrice: Number,
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {timestaps: true})
mongoose.model('Stock', StockSchema);