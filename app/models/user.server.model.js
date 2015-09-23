var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	firstName: {
		type: String,
		default: '-'
	},
	lastName: String,
	email: String,
	username: String,
	password: {
		type: String,
		default: '1234567890!a'
	},
	created: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('User', UserSchema);

