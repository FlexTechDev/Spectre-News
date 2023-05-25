import React from 'react';
import './Slider.css';

function Slider({onChange}) {
  const handleChange = (event) => {
    let value = parseInt(event.target.value, 10);
    let politicalView;
    if (value <= 33) {
      politicalView = 'left';
    } else if (value > 33 && value <= 66) {
      politicalView = 'center';
    } else {
      politicalView = 'right';
    }
    onChange(politicalView);
  };

  return (
    <div className="slider-container">
      <span>Left Media</span>
      <input
        type="range"
        min="1"
        max="100"
        className="slider"
        onChange={handleChange}
      />
      <span>Right Media</span>
    </div>
  );
}

export default Slider;
