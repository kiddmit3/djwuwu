const mongoose = require('mongoose');

var GigsSchema = new mongoose.Schema({
	image_url: String,
	title: String,
	date: Date,
	link: String,
	time: String,
	created: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Gig', GigsSchema);
