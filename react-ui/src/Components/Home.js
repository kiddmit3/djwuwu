import React, { Component } from "react";
import Logo from "../img/ewu.png";
import Gigs from "./Gigs";
 
class Home extends Component {
constructor(){
    super();
    this.state = {
      gigs: []
    }
  }

    componentWillMount(){
      this.setState({gigs:this.props.gigs})
    }

  render() {
    return (
      <div className="">
        <Gigs gigs={this.state.gigs} />
      </div>
    );
  }
}
 
export default Home;