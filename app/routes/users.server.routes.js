var users = require('../../app/controllers/users.server.controller');

module.exports = function(app) {
	app.route('/users').
		post(users.create).
		get(users.list);

	app.route('/users/:userId').
		get(users.read).
		post(users.update).
		delete(users.delete);

	app.param('userId', users.userByID);
}
