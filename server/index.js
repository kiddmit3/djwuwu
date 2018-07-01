var compression = require('compression');

const express = require('express');
const parseurl = require('parseurl');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const mongoose = require("mongoose");
const Gig = require('../models/gig');

// const seedDB = require("./seeds");
const nodemailer = require('nodemailer');

const app = express();
const bodyParser = require("body-parser");


const url = 'mongodb://heroku_j1r4jm1n:vmm5077h3eluqp686hrfg2d9qf@ds121311.mlab.com:21311/heroku_j1r4jm1n';
mongoose.connect(url, function (err, db) {
 if (err) {
   console.log('Unable to connect to the mongoDB server. Error:', err);
 } else {
   console.log('Connection established to', url);
 }
});
// seedDB();
const PORT = process.env.PORT || 5000;

// Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
  app.set("view engine", "ejs");

  app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  });

  app.post('/api/gigs', function(req, res) {
    Gig.create({
      image_url: req.body.image_url,
      title: req.body.title,
      date: req.body.date,
      link: req.body.link,
      time: req.body.time
    }).then(gigs => {
      res.json(gigs)
    });
  });

  app.delete("/api/gigs/:id", function(req, res) {
    Gig.findByIdAndRemove(req.params.id, function(err, gigs) {
        if (err) {
            req.flash("error", "Something went wrong");
            res.redirect("back");
        } else {
            res.send(gigs);
        }
      })
  })

  app.get('/api/gigs', function(req,res){
    Gig.find({}, null, {sort:'-date'}, function(err, gigs){
      console.log("connected!");
      res.send(gigs)
    })
  })

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

}
