import React, { Component } from "react";
import GigItem from "./GigItem";
import PropTypes from 'prop-types';
 
class Gigs extends Component {

  deleteGig(_id){
    this.props.onDelete(_id);
  }

  render() {
  	let gigItems;
  	if(this.props.gigs){
  		gigItems = this.props.gigs.map(gig => {
  			return (
  				<div>
  				
  				<GigItem onDelete={this.deleteGig.bind(this)} key={gig._id} gig={gig} />
  				
  				</div>
  			); 			
  		});
  	}
  	
    return (
      <div key="hi">
      	{gigItems}
      </div>
    );
  }
}

Gigs.propTypes = {
  gigs: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
}
 
export default Gigs;