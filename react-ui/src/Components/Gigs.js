import React, { Component } from "react";
import GigItem from "./GigItem";
 
class Gigs extends Component {

  render() {
  	let gigItems;
  	if(this.props.gigs){
  		gigItems = this.props.gigs.map(gig => {
  			return (
  				<div>
  				
  				<GigItem key={gig.title} gig={gig} />
  				
  				</div>
  			); 			
  		});
  	}
  	
    return (
      <div>
      	{gigItems}
      </div>
    );
  }
}
 
export default Gigs;