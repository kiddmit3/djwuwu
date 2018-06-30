import React, { Component } from "react";
import PropTypes from 'prop-types';
import moment from 'moment';

 
class Gigitem extends Component {
  deleteGig(_id){
    this.props.onDelete(_id);
  }
  render() {
    return (
      <div>
       <div className="position-relative">
       <a href={this.props.gig.link} target="_blank" rel="noopener noreferrer">
       <img className="img-fluid mx-auto d-block w-100 grow-xs" src={this.props.gig.image_url} alt="logo"/></a>
       <a style={{position: 'absolute', top: '5px',right:'10px'}} onClick={this.deleteGig.bind(this, this.props.gig._id)} className="text-white grow"><i class="far fa-minus-square"></i></a>
       <h6 className="text-white mb-3 mt-1">{this.props.gig.title} | {this.props.gig.date} {this.props.gig.time}</h6>
       </div>
       
       
      </div>

    );
  }
}

Gigitem.propTypes = {
  gig: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
}
 
export default Gigitem;