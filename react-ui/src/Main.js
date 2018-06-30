import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter 
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Music from "./Components/Music";
import Photos from "./Components/Photos";
import Contact from "./Components/Contact";
import AddGig from "./Components/AddGig";
import Image from "./img/IMG_0800.jpg";
import Dav from "./img/dav.png";
import brandlogo from "./img/wuwu-sm.png";
import ScrollToTop from 'react-router-scroll-top';
// import uuid from "uuid";

class Main extends Component {
  constructor(){
    super();
    this.state = {
      gigs: [],
      isTop: true
    }
  }


  // getGigsSeed(){
  //   this.setState({gigs:[
  //     {
  //       _id: uuid.v4(),
  //       image_url: 'https://picsum.photos/500/500/?random',
  //       title:'Monkey Bar',
  //       date:'07/01/2018',
  //       link:'https://www.instagram.com',
  //       time:'07:00PM'
  //     },
  //     {
  //       _id: uuid.v4(),
  //       image_url: 'https://picsum.photos/600/300/?random',
  //       title:'Tokyo Beat',
  //       date:'07/01/2018',
  //       link:'https://www.instagram.com',
  //       time:'07:00PM'
  //     },
  //     {
  //       _id: uuid.v4(),
  //       image_url: 'https://picsum.photos/700/700/?random',
  //       title:'626 Night Market',
  //       date:'07/01/2018',
  //       link:'https://www.instagram.com',
  //       time:'07:00PM'
  //     }
  //     ]})
  // }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop });
      }
    });
    // this.getGigs();
    // this.getGigsSeed();

  }


  componentWillMount(){
      // this.getGigs();
      // this.getGigsSeed();
    }
  
  handleAddGig(gig){
    let gigs = this.state.gigs;
    gigs.push(gig);
    this.setState({gigs:gigs})
  }
  handleDeleteGig(_id){
    let gigs = this.state.gigs;
    let index = gigs.findIndex(x=> x._id === _id);
    gigs.splice(index,1);
    this.setState({gigs:gigs})
  }

  render() {
    return (
      <BrowserRouter>
      <ScrollToTop>
      <div>
        <div className="sticky-top">
        <div className={this.state.isTop ? 'padding-right' : 'bg-rose'}> 
        <nav className="container navbar navbar-default navbar-expand navbar-light p-0 mt-0">
          <div className="navbar-header fadeInDown">
            <a className="navbar-brand text-white grow-sm pl-4 pr-0 mr-0" href=""><img className="mr-1 img-fluid" id="brandlogo" alt="logo" src={brandlogo}/>
            <span className="ml-2" id="wuwu-text">dj<b>WUWU</b></span></a>     
          </div>
          <ul className="header ml-auto pt-0 mb-0">
            <li><NavLink className="grow-sm" exact to="/"><span className="nav-text">HOME</span><i className="fas fa-home nav-icon fa-lg"></i></NavLink></li>
            <li><NavLink className="grow-sm" to="/about"><span className="nav-text">ABOUT</span><i className="fas fa-info-circle nav-icon fa-lg"></i></NavLink></li>
            <li><NavLink className="grow-sm" to="/music"><span className="nav-text">MUSIC</span><i className="fas fa-music nav-icon fa-lg"></i></NavLink></li>
            <li><NavLink className="grow-sm" to="/photos"><span className="nav-text">PHOTOS</span><i className="fas fa-camera-retro nav-icon fa-lg"></i></NavLink></li>
            <li><NavLink className="grow-sm" to="/contact"><span className="nav-text">CONTACT</span><i className="fas fa-question-circle nav-icon fa-lg"></i></NavLink></li>
          </ul>
        </nav>
        </div>
      </div>

        <div className="container pr-0">
        <div className="social-sidebar bg-white pr-1">
            <ul className="navbar-nav">
              <li className=""><a href="https://www.facebook.com/niyunwu" className="nav-link grow" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
              <li className=""><a href="https://www.instagram.com/niyun_wu/" className="nav-link grow" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
              <li className=""><a href="https://soundcloud.com/djwuwu" className="nav-link grow" target="_blank" rel="noopener noreferrer"><i className="fab fa-soundcloud"></i></a></li>
              <li className=""><a href="https://www.mixcloud.com/djwuwu/" className="nav-link grow" target="_blank" rel="noopener noreferrer"><i className="fab fa-mixcloud"></i></a></li>
              <li className=""><a href="mailto:info@djwuwu.com" className="nav-link grow"><i className="far fa-envelope"></i></a></li>
            </ul>
          </div>

          <div className="content">
            <div className="row">
             <div className="col-md-8 pr-lg-4 no-scroll-box mb-3"> 
              
              <Route exact path="/" render={()=><Home/>}/>
              <Route path="/about" render={()=><About />}/>
              <Route path="/music" render={()=><Music venues={this.state.venues}/>}/>
              <Route path="/photos" render={()=><Photos photos={this.state.photos}/>}/>
              <Route path="/contact" render={()=><Contact />}/>
            </div>
      
            <div className="col-md-4 marginr">
            <div className="fadeInUp" id="mixcloudprof">
            <img className="img-fluid mx-auto d-block fadeInUp" alt="profile with blue background" src={Image}/>
            <iframe className="fadeInUp" width="100%" height="90" src="https://www.mixcloud.com/widget/follow/?u=%2Fdjwuwu%2F" frameBorder="0" title="Mixcloud Account"></iframe>
            <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fdjwuwu%2F" frameBorder="0" id="mplayer" title="Mixcloud Player"></iframe>
            </div>

            <iframe src="https://snapwidget.com/embed/564972" className="snapwidget-widget mt-3 fadeInUp" frameBorder="0" scrolling="no" title="Insta"></iframe>

            <div className="footer row mb-2 float-right mr-1">
                <a href="https://kiddmit3.github.io"><img className="img-fluid rounded-circle grow-sm" src={Dav} alt="David Lac, Developer"/></a>
                <div className="text-white" id="davidplug">Developed by David Lac <br/>© 2018</div>
            </div>
            <AddGig addGig={this.handleAddGig.bind(this)}/>
            </div>

          </div>

        </div>

</div>
        </div>
</ScrollToTop>
      </BrowserRouter >
    );
  }
}
 
export default Main;
