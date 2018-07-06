import React, { Component } from "react";
import Image from "../img/owen-cl-123303-unsplash.jpg";
import $ from 'jquery';
 
class Contact extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  async handleSubmit(e) {
    e.preventDefault()

    const {name, company, email, phone, message} = this.state

    $.ajax({
      type: 'POST',
      url: '/api/contactform',
      data: {name, company, email, phone, message},
      dataType:'json',
      cache: false,
      success: function(data){


        }
  })
  }

  render() {
    return (
      <div className="card mb-3 fadeInUp">
      <img className="img-fluid mx-auto d-block card-img-top" src={Image} alt="Los Angeles"/>
      <div className="text-right mr-2 mt-2"><em>Based in Los Angeles, CA </em></div>
        <form className="p-3 mt-3" onSubmit={this.handleSubmit}>
        <div className="row p-4">
          <div className="col-md-6 form-line">
              <div className="form-group">
                <label for="exampleInputUsername">Your Name</label>
                <input type="text" className="form-control" id="" placeholder=" Enter Name" 
                onChange={this.handleChange} required/>
              </div>
              <div className="form-group">
                <label for="telephone">Company</label>
                <input type="text" className="form-control" id="company" placeholder=" Enter Business" 
                onChange={this.handleChange} required/>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail">Email Address</label>
                <input type="email" className="form-control" id="exampleInputEmail" placeholder=" Enter Email Address" 
                onChange={this.handleChange} required/>
              </div>  
              <div className="form-group">
                <label for="telephone">Phone Number</label>
                <input type="tel" className="form-control" id="telephone" placeholder=" Enter Phone #" 
                onChange={this.handleChange} required/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label for ="description"> Message</label>
                <textarea  className="form-control textbox" id="description" placeholder="Enter Your Message" onChange={this.handleChange} />
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