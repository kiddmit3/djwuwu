import React, { Component } from "react";
import PropTypes from 'prop-types';
 
class Gigitem extends Component {
  deleteGig(_id){
    this.props.onDelete(_id);
  }
  render() {
    return (
      <div className="fadeInUp">
       <a href='#' onClick={this.deleteGig.bind(this, this.props.gig._id)}>X</a>
       <a href={this.props.gig.link} target="_blank" rel="noopener noreferrer">
       <img className="img-fluid mx-auto d-block w-100 grow-xs" src={this.props.gig.image_url} alt="logo"/>
       <h6 className="text-white float-right mb-3 mt-1">{this.props.gig.title} | {this.props.gig.date} {this.props.gig.time}  </h6>
       </a>
      </div>
    );
  }
}

Gigitem.propTypes = {
  gigs: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
}
 
export default Gigitem;