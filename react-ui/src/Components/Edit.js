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
    $.ajax({
    url: '/api/gigs/'+ _id,
    method: 'DELETE',
    dataType:'json',
    cache: false,
    success: function(data){
        let gigs = this.state.gigs;
        let index = gigs.findIndex(x=> x._id === _id);
        gigs.splice(index,1);
        this.setState({gigs:gigs}); 
    }.bind(this),
    error: function(xhr, status, err){
      console.log(err);
    }
  })
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
            <label>Title</label>
            <input type="text" className="form-control" name="title" placeholder="Enter Title" required/>
          </div>
          <div className="row">
          <div className="form-group col-6">
            <label>Date</label>
            <input type="date" className="form-control" name="date" required/>
          </div>
          <div className="form-group col-6">
            <label>Time</label>
            <input type="time" className="form-control" name="time" value="21:00" required/>
          </div>
          </div>
          <div className="form-group">
            <label>Link URL</label>
            <input type="text" className="form-control" name="link" placeholder="Enter URL to Event" required/>
          </div>
          <div className="form-group">
            <label>Image Upload</label>
            <input type="text" className="form-control" name="image_url" placeholder="Enter image url" required/>
          </div>
          <button type="submit" className="btn btn-primary float-right">Create</button>
        </form>
      </div>

        <Gigs gigs={this.state.gigs} onDelete={this.handleDeleteGig.bind(this)}/>
      </div>
    );
  }
}

export default Edit;