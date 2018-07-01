import React, { Component } from "react";
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

 function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../img/photos/', false, /\.(png|jpe?g|svg)$/));

let lightboxImages = [];
for (var key in images) {
  var obj = {src:images[key],
    width:4,
    height: 5,};
  lightboxImages.push(obj);
}

lightboxImages[0].width = 5;
lightboxImages[1].width = 7;
lightboxImages[6].height = 6;
lightboxImages[7].width = 6;
lightboxImages[7].height = 6;
lightboxImages[8].height = 6;
lightboxImages[8].width = 6;
lightboxImages[11].width = 6;
lightboxImages[13].height = 7;


class Photos extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    return (
      <div className="card bg-white p-4 mb-3 fadeInUp">
        <Gallery photos={lightboxImages} onClick={this.openLightbox} />
        <Lightbox images={lightboxImages}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />

        <div className="pb-2 pt-2"><i className="fas fa-camera-retro float-right fa-lg"></i></div>
        <div className="clearfix"></div>
      </div>
    );
  }
}
 
export default Photos;