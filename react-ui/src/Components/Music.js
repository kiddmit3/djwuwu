import React, { Component } from "react";
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


// <MusicPlayer playlist={playlist} />

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../img/venues/', false, /\.(png|jpe?g|svg)$/));

let venues = [];
for (var key in images) {
  var obj = {src: images[key],
    alt: key.slice(0, -4)};
  venues.push(obj);
}

console.log(venues);

class Music extends Component {
  render() {
    return (
      <div className="mb-3 fadeInUp">
      <div className="card p-4">
        <div className="float-right mb-3"><i className="fas fa-music fa-lg float-right"></i></div>
        <iframe width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/316497497&color=%23ba489a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>        </div>
        
        <div className="card p-4 mt-4">
        <h4>Venues</h4>

      <div className="card-columns">

{venues.map(function(imageProps) {
  return (
    <div className="mb-3 d-inline-block" key={ imageProps.src }>
      <img className="img-fluid grow-xs" src={ imageProps.src } alt={ imageProps.alt } />
      { imageProps.alt }
    </div>
  );
})}




      </div>




        </div>

      </div>
    );
  }
}
 
export default Music;