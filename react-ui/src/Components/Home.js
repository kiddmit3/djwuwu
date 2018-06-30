import React, { Component } from "react";
import Gigs from "./Gigs";
import PropTypes from 'prop-types';
 
class Home extends Component {
constructor() {
    super();
    this.state = {
        gigs: []
    }
}

componentWillMount() {
    this.setState({ gigs: this.props.gigs })
}

deleteGig(_id) {
    this.props.onDelete(_id);
}

  render() {
    return (
      <div className="">
        <Gigs onDelete={this.deleteGig.bind(this)} gigs={this.state.gigs} />
      </div>
    );
  }
}

Home.propTypes = {
  gigs: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
}
 
export default Home;