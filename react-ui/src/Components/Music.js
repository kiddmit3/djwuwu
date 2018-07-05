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


class Music extends Component {
  render() {
    return (
      <div className="mb-3 fadeInUp">

      <div className="card bg-white p-4 mb-3">

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

      <div className="card p-4">
        <div className="float-right mb-3"><i className="fas fa-music fa-lg float-right"></i></div>
        <iframe title="SoundCloud" width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/316497497&color=%23ba489a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>        </div>
        
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