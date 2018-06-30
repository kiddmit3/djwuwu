import React, { Component } from "react";
import Gigs from "./Edit/EGigs";
import $ from 'jquery';

 
class Edit extends Component {
constructor() {
    super();
    this.state = {
        gigs: []
    }
}

getGigs(){
  $.ajax({
    url: '/api/gigs',
    dataType:'json',
    cache: false,
    success: function(data){
      this.setState({gigs:data}, function(){
        console.log(this.state)
      });
    }.bind(this),
    error: function(xhr, status, err){
      console.log(err);
    }
  })
}

handleAddGig(gig){
    let gigs = this.state.gigs;
    gigs.push(gig);
    this.setState({gigs:gigs})
  }
handleDeleteGig(_id){
    let gigs = this.state.gigs;
    let index = gigs.findIndex(x=> x._id === _id);
    gigs.splice(index,1);
    this.setState({gigs:gigs})
  }


componentWillMount() {
    this.getGigs();
}

  render() {
    return (
      <div className="">

      <div className="card p-4 mb-3">
        <h5 className="card-title">Add New Post</h5>
        <form action="/api/gigs" method="POST">
          <div className="form-group">
            <label for="title">Title</label>
            <input type="text" className="form-control" name="title" placeholder="Enter Title"/>
          </div>
          <div className="row">
          <div className="form-group col-6">
            <label for="date">Date</label>
            <input type="date" className="form-control" name="date"/>
          </div>
          <div className="form-group col-6">
            <label for="time">Time</label>
            <input type="time" className="form-control" name="time"/>
          </div>
          </div>
          <div className="form-group">
            <label for="link">Link URL</label>
            <input type="text" className="form-control" name="link" placeholder="Enter URL to Event"/>
          </div>
          <div className="form-group">
            <label for="title">Image Upload</label>
            <input type="text" className="form-control" name="image_url" placeholder="Enter image url"/>
          </div>
          <button type="submit" className="btn btn-primary float-right">Create</button>
        </form>
      </div>

      <div className="card p-4 mb-3">
        <h5 className="card-title">Delete Post</h5>
        <form action="/api/gigs" method="POST">
          <div className="form-group">
            <label for="title">Post ID</label>
            <input type="text" className="form-control" name="title" placeholder="Enter Post ID"/>
          </div>
          <button type="submit" className="btn btn-primary float-right">Delete</button>
        </form>
      </div>
        <Gigs gigs={this.state.gigs} onDelete={this.handleDeleteGig.bind(this)}/>
      </div>
    );
  }
}

export default Edit;