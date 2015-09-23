var User = require('mongoose').model('User');

exports.create = function(req, res, next) {
	console.log(req.body);
	var user = new User(req.body);

	user.save(function(err) {
		if (err) {
			return next(err);
		} else {
			res.json(user);
		}
	});
};

exports.list = function(req, res, next) {
	User.find({}, 'username lastName email', {skip: 0, limit: 10}, function(err, users) {
		if (err) {
			next(err);
		} else {
			res.json(users);
		}
	});
};

exports.read = function(req, res, next) {
	res.json(req.user);
};

exports.userByID = function(req, res, next, userId) {
	User.findOne({
		_id: userId
	}, function(err, user) {
		if (err) {
			next(err);
		} else {
			req.user = user;
			next();
		}
	});
};

