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
       <img className="img-fluid mx-auto d-block w-100 grow-xs" src={this.props.gig.image_url} alt="post"/></a>
       <button style={{position: 'absolute', top: '15px',right:'15px'}} data-toggle="modal" data-target={'#'+this.props.gig._id} className="text-danger btn btn-light border">
       <i className="fas fa-trash-alt fa-lg"></i></button>

       <a style={{position: 'absolute', top: '5px',right:'10px'}} data-toggle="modal" data-target={'#'+this.props.gig._id} className="text-white grow">
       <i classname=""></i></a>
       <h6 className="text-white mb-3 mt-1">{this.props.gig.title} | {this.props.gig.date} {this.props.gig.time}</h6>
       </div>
  
<div className="modal fade" id={this.props.gig._id} tabindex="-1" role="dialog" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Confirmation</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <img className="img-fluid mx-auto d-block w-100 mb-3" src={this.props.gig.image_url} alt="post"/>
      <h6 className="card-title">Are you sure you want to delete this post?</h6>
      
      </div>
      <div className="modal-footer">
        
        <button type="button" className="btn btn-danger" onClick={this.deleteGig.bind(this, this.props.gig._id)} data-dismiss="modal">Yes</button>
        <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
      </div>
    </div>
  </div>
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