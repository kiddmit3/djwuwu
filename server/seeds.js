var mongoose 	= require("mongoose");
const Signature = require('../models/signature');

var data = [
	{
		guestSignature: "David",
		message: "Test"
	}
]

function seedDB(){
// remove all gyms
Signature.remove({}, function(err){
	if(err){
		console.log(err);
	}
	console.log("removed signatures!");

	// Add Data
	data.forEach(function(seed){
		Signature.create(seed,function(err,climb){
			if(err){
				console.log(err)
			} else {
				console.log("Added");
				
			}
		})
	})	
});



}

module.exports = seedDB;