import React, { useState } from 'react';
import "./topslider.css"

const Topsliderimg = ({ src }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleToggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div
      className={`image-zoom-container ${isZoomed ? 'zoomed' : ''}`}
      onMouseEnter={handleToggleZoom}
      onMouseLeave={handleToggleZoom}
      onClick={handleToggleZoom}
    >
      <img src={src} alt="Zoomable Image" className='topslide-contain-img'/>
    </div>
  );
};

export default Topsliderimg;
