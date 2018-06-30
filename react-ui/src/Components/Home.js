import React, { Component } from "react";
import Gigs from "./Gigs";
import PropTypes from 'prop-types';
import $ from 'jquery';
import AddGig from "./AddGig";

 
class Home extends Component {
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
        <Gigs gigs={this.state.gigs} onDelete={this.handleDeleteGig.bind(this)}/>
        <AddGig addGig={this.handleAddGig.bind(this)}/>
      </div>
    );
  }
}

export default Home;