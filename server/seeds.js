var mongoose 	= require("mongoose");
const Gig = require('../models/gig');

var data = [
      {
        image_url: 'https://picsum.photos/500/500/?random',
        title:'Monkey Bar',
        date:'07/01/2018',
        link:'https://www.instagram.com',
        time:'07:00PM'
      },
      {
        image_url: 'https://picsum.photos/600/300/?random',
        title:'Tokyo Beat',
        date:'07/01/2018',
        link:'https://www.instagram.com',
        time:'07:00PM'
      },
      {
        image_url: 'https://picsum.photos/700/700/?random',
        title:'626 Night Market',
        date:'07/01/2018',
        link:'https://www.instagram.com',
        time:'07:00PM'
      }
]

function seedDB(){
Gig.remove({}, function(err){
	if(err){
		console.log(err);
	}
	console.log("removed signatures!");

	// Add Data
	data.forEach(function(seed){
		Gig.create(seed,function(err,climb){
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