import React, { Component } from "react";
import uuid from "uuid";
import PropTypes from 'prop-types';
 
class AddGig extends Component {
constructor(){
  super();
  this.state = {
    newGig: {}
  }
}

 handleSubmit(e){
  this.setState({newGig: {
    _id: uuid.v4(),
    image_url: this.refs.image_url.value,
    title: this.refs.title.value,
    date: this.refs.date.value,
    link: this.refs.link.value,
    time: this.refs.time.value
  }}, function(){
    this.props.addGig(this.state.newGig);
  })
  e.preventDefault();
 }

  render() {
    return (
      <div>
      	<h3> Add Gig </h3>
        <form className="m-3" onSubmit={this.handleSubmit.bind(this)}>
        <div>
        <label> Title</label>
        <input className="form-control m-2" type="text" ref="image_url" placeholder="image_url" required/>
        <input className="form-control m-2" type="text" ref="title" placeholder="title" required/>
        <input className="form-control m-2" type="date" ref="date" required/>
        <input className="form-control m-2" type="text" ref="link" placeholder="link" required/>
        <input className="form-control m-2" type="time" ref="time" placeholder="" required/>
        </div>
        <button className="float-right">Submit</button>
        </form>
      </div>
    );
  }
}

AddGig.propTypes = {
  addGig: PropTypes.func.isRequired
}
 
export default AddGig;