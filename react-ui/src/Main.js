import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter 
} from "react-router-dom";
import Home from "./Components/Home";
import Music from "./Components/Music";
// import Photos from "./Components/Photos";
import Contact from "./Components/Contact";
import Edit from "./Components/Edit";
import Dav from "./img/dav.png";
import brandlogo from "./img/djwuwu.png";
import ScrollToTop from 'react-router-scroll-top';

// import uuid from "uuid";

class Main extends Component {
  constructor(){
    super();
    this.state = {
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
  

  render() {
    return (
      <BrowserRouter>
      <ScrollToTop>

      <div>
      
        <div className="sticky-top">
        <div className={this.state.isTop ? '' : 'bg-rose'}> 
      {/*  
        <nav className="navbar navbar-default navbar-expand navbar-light text-right">
          <ul className="header pt-0 mb-0">
            <li><NavLink className="grow-sm inactive" activeClassName="active" exact to="/"><span className="nav-text">HOME</span><i className="fas fa-home nav-icon fa-lg"></i></NavLink></li>
            <li><NavLink className="grow-sm active py-3" activeClassName="active" to="/music"><span className="nav-text">ABOUT</span><i className="fas fa-music nav-icon fa-lg"></i></NavLink></li>
            <li>
                <div className="navbar-brand grow-sm pl-4 pr-1 pt-2 pb-2" href=""><img className="img-fluid" id="brandlogo" alt="logo" src={brandlogo}/>
                </div>     
             </li>
            <li><a className="grow-sm inactive py-3" href={epk} target="_blank"><span className="nav-text text-white">EPK</span><i className="fas fa-camera-retro nav-icon fa-lg"></i></a></li>
           <li><NavLink className="grow-sm inactive" activeClassName="active" to="/contact"><span className="nav-text">CONTACT</span><i className="fas fa-question-circle nav-icon fa-lg"></i></NavLink></li>
          </ul>
        </nav>
      */}
        </div>
        </div>


        <div className="container pr-0 pt-5" style={{marginTop: '5vh' }}>
        <div className="social-sidebar bg-white pr-1">
            <ul className="navbar-nav">
              <li className=""><a href="https://www.instagram.com/dj.wuwu/" className="nav-link grow" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
              <li className=""><a href="https://soundcloud.com/djwuwu" className="nav-link grow" target="_blank" rel="noopener noreferrer"><i className="fab fa-soundcloud"></i></a></li>
              <li className=""><a href="https://www.mixcloud.com/djwuwu/" className="nav-link grow" target="_blank" rel="noopener noreferrer"><i className="fab fa-mixcloud"></i></a></li>
              <li className=""><a href="https://www.linkedin.com/in/estherniyunwu" className="nav-link grow" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a></li>

              
              <li className=""><a href="mailto:info@djwuwu.com" className="nav-link grow"><i className="far fa-envelope"></i></a></li>
            </ul>
          </div>

          <div className="content pl-2 pr-5 px-sm-0">
            <div className="row">    
            <div className="col-lg-7 no-scroll-box mb-3"> 
              <Route exact path="/home" render={()=><Home/>}/>
              <Route path="/" render={()=><Music venues={this.state.venues}/>}/>
              {/* <Route path="/photos" render={()=><Photos photos={this.state.photos}/>}/> */}
              <Route path="/contact" render={()=><Contact />}/>
              <Route path="/edit" render={()=><Edit />}/>
            </div>
            <div className="col-lg-3 offset-lg-2 order-lg-first text-center ml-0 mr-3">

                <div className="" id="mixcloudprof">
                <iframe className="" width="100%" height="90" src="https://www.mixcloud.com/widget/follow/?u=%2Fdjwuwu%2F" frameBorder="0" title="Mixcloud Account"></iframe>
                <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fdjwuwu%2F" frameBorder="0" id="mplayer" title="Mixcloud Player"></iframe>
                </div>

                <iframe src="https://snapwidget.com/embed/564972" className="snapwidget-widget mt-3" frameBorder="0" scrolling="no" title="Insta"></iframe>
                <img className="img-fluid mx-auto" id="brandlogo" alt="logo" src={brandlogo}/><br/>
                <span style={{color: '#E75480'}}>Email </span>
                <a href="mailto: info@djwuwu.com"><span className="text-white">info@djwuwu.com</span></a>
                <div className="footer row mb-2 text-center mt-3">
                    {/*  <a href="https://kiddmit3.github.io"><img className="img-fluid rounded-circle grow-sm" src={Dav} alt="David Lac, Developer"/></a> */}
                    <div className="text-white w-100 text-center" id="davidplug">All rights reserved. <br/>© 2020  djWUWU</div>
                </div>
            
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
