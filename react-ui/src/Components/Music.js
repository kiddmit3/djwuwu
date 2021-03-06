import React, { Component } from "react";
import Image from "../img/geert-pieters-684286-unsplash.jpg";
// import MusicPlayer from 'react-responsive-music-player';
// import Image from "../audio/esther.jpg";


// function importAll(r) {
//   let audio = {};
//   r.keys().map((item, index) => { audio[index] = r(item); });
//   return audio;
// }

// const audio = importAll(require.context('../audio/', false, /\.(mp3)$/));

// const playlist = [
//   {
//     url: audio[0],
//     cover: Image,
//     title: 'Heart Attack',
//     artist: [
//       'AOA'
//     ]
//   },
//   {
//     url: audio[1],
//     cover: Image,
//     title: 'DNA',
//     artist: [
//       'BTS'
//     ]
//   },
//   {
//     url: audio[2],
//     cover: Image,
//     title: 'First Love',
//     artist: [
//       'Bolbbalgan4'
//     ]
//   },
//   {
//     url: audio[3],
//     cover: Image,
//     title: 'Instagram',
//     artist: [
//       'DEAN'
//     ]
//   }
// ]

import epk from '../pdf/WUWU_EPK.pdf'

// <MusicPlayer playlist={playlist} />

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../img/venues/', false, /\.(png|jpe?g|svg)$/));

let venues = [];
for (var key in images) {
    var obj = {
        src: images[key],
        alt: key.slice(0, -4)
    };
    venues.push(obj);
}


class Music extends Component {
    render() {
        return (
      <div className="p-0">
      <div className="card mb-3 shadow-none border-0 p-0" style={{background: 'none', fontSize: '1.2rem', fontWeight: '600', color: '#E75480', lineHeight: '1.2'}}>
        {/* <img className="img-fluid mx-auto d-block card-img-top" src={Image} alt="disc jockey"/> */}
      <div className="p-3" style={{backgroundColor: 'rgb(255,255,255, 0.5)'}}>
      <h1 style={{color: '#D59AB6'}}>Esther Wu
        <a className="float-right text-white" href={epk} target="_blank" style={{fontSize: '1.5rem'}}>
        <i className="far fa-file fa-sm"></i> epk</a>
      </h1>
      <p>Working at the intersection of technology and entertainment, “wuwu” takes an interest in curating lineups at residencies accross Los Angeles, CA. From Broadway Bar 
      to Blind Barber, her focus in DJing and event curation expands into djing for fitness, 
      multicultural networking, and charity events - not just the typical bar/club scene. 
      </p>
      <p>If there were a genre of music that can describe her, it's chill house, melodic house, and future 
      bass tracks - drawing inspiration from producers with the likes of Kaskade, Cheat Codes, Robotaki, 
      Prince Fox, and Felix Cartal.
      </p>        
      </div>
      </div>
       
      <div className="card mt-4 p-0 shadow-none border-0" style={{background: 'none'}}>
      <div className='row mt-3'>

      {venues.map(function(imageProps) {
        return (
          <div className="mb-3 d-inline-block text-white col-3 d-inline-block px-1 mx-0" key={ imageProps.src } style={{fontSize: '1rem', fontWeight: '800'}}>
            <img className="img-fluid grow-xs" src={ imageProps.src } alt={ imageProps.alt } style={{height: '120px'}} title={ imageProps.alt }/>
          </div>
        );
      })}
      </div>
      </div>
      {/*
      <div className="card p-4" >
        <div className="float-right mb-3"><i className="fas fa-music fa-lg float-right"></i></div>
        <iframe title="SoundCloud" width="100%" height="350" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/316497497&color=%23ba489a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>        
      </div>
      */}
      </div>
        );
    }
}

export default Music;