import React, { Component } from "react";
 
class Gigitem extends Component {

  render() {
    return (
      <div className="fadeInUp">
       <a href={this.props.gig.link} target="_blank" rel="noopener noreferrer">
       <img className="img-fluid mx-auto d-block w-100 grow-xs" src={this.props.gig.image_url} alt="logo"/>
       <h6 className="text-white float-right mb-3 mt-1">{this.props.gig.title} | {this.props.gig.date} {this.props.gig.time}  </h6>
       </a>
      </div>
    );
  }
}
 
export default Gigitem;