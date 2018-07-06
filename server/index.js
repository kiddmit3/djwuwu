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
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


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
      res.redirect('back');
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


app.post('/api/gigs', function(req, res) {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail =  
   "<h3>Contact Details</h3><ul><li>Name: ${req.body.name}</li><li>Company: ${req.body.company}</li><li>Email: ${req.body.email}</li><li>Phone: ${req.body.phone}</li></ul><h3>Message</h3><p>${req.body.message}</p>";

    let transporter = nodemailer.createTransport({
            host: 'smtp.google.com',
            port: 487,
            secure: false, 
            auth: {
                user: 'p7n67tizqldmobej@ethereal.email', 
                pass: '5m41AzBZghb5UDhJUD' 
            }
        });


    let mailOptions = {
        from: '"djwuwu.com', 
        to: 'info@djwuwu.com', 
        subject: 'New Gig Inquiry', 
        text: req.body.message, 
        html: htmlEmail 
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    });
  })
})


  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

}
