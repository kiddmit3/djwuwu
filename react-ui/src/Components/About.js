import React, { Component } from "react";
import Image from "../img/geert-pieters-684286-unsplash.jpg";
 
class About extends Component {
  render() {
    return (
      <div className="card bg-white p-4 mb-3 fadeInUp">

        <img className="img-fluid mx-auto d-block mb-3" src={Image} alt="disc jockey"/>
        <h2 className="mb-3">Esther Wu</h2>
        <p>"WuWu" is Californian native that spent some time as an Economics Major at the Boston University. Having moved 
        back to LA in 2015, she works as an IT Business Analyst at SONY ENTERTAINMENT during the day, designing applications for their business units. 
        </p>
        <p>
        Growing up, she always had a strong passion in being able to help others through technology. However, more recently she evolved that passion 
        into using music to share and make others happy. She has DJ’d at various venues such as The Other Door and Tokyo Beat. 
        If there were a genre of music that can describe her, it's chill house, melodic house, and future bass tracks - drawing inspiration
        from producers with the likes of Kaskade, Cheat Codes, Robotaki, Prince Fox, and Felix Cartal.</p>

        <div className="pb-2"><i className="fas fa-info-circle float-right fa-lg"></i></div>
      </div>
    );
  }
}
 
export default About;