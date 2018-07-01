import React, { Component } from "react";
import Image from "../img/owen-cl-123303-unsplash.jpg";
 
class Contact extends Component {
  render() {
    return (
      <div className="card p-4 mb-3 fadeInUp">
      <img className="img-fluid mx-auto d-block" src={Image} alt="Los Angeles"/>
      <div className="text-right"><em>Based in Los Angeles, CA </em></div>
        <form className="card p-3 mt-3">
        <div className="row">
          <div className="col-md-6 form-line">
              <div className="form-group">
                <label for="exampleInputUsername">Your Name</label>
                <input type="text" className="form-control" id="" placeholder=" Enter Name" required/>
              </div>
              <div className="form-group">
                <label for="telephone">Company</label>
                <input type="text" className="form-control" id="company" placeholder=" Enter Business" required/>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail">Email Address</label>
                <input type="email" className="form-control" id="exampleInputEmail" placeholder=" Enter Email Address" required/>
              </div>  
              <div className="form-group">
                <label for="telephone">Phone Number</label>
                <input type="tel" className="form-control" id="telephone" placeholder=" Enter Phone #" required/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label for ="description"> Message</label>
                <textarea  className="form-control textbox" id="description" placeholder="Enter Your Message"></textarea>
                <button className="btn btn-default float-right mt-3"><i class="fa fa-paper-plane" aria-hidden="true"></i> Send Inquiry</button>

              </div>
            </div>
          </div> 
        </form>

      </div>
    );
  }
}
 
export default Contact;