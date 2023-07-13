import React, { useState } from 'react';
import './Slider.css';

function Slider({ onChange, value }) {
  const [localValue, setLocalValue] = useState(value);

  const handleChange = (event) => {
    let value = parseInt(event.target.value, 10);
    setLocalValue(value);
  };

  const handleRelease = (event) => {
    let value = parseInt(event.target.value, 10);
    value = roundToNearestPosition(value);
    setLocalValue(value);
    let politicalView;
    if (value <= 1) {
      politicalView = 'left';
    } else if (value > 1 && value <= 26) {
      politicalView = 'midleft';
    } else if (value > 26 && value <= 50) {
      politicalView = 'center';
    } else if (value > 50 && value <= 74) {
      politicalView = 'midright';
    } else {
      politicalView = 'right';
    }
    onChange(politicalView);
  }

  const roundToNearestPosition = (value) => {
    if (value <= 1) {
      return 1;
    } else if (value <= 26) {
      return 26;
    } else if (value <= 50) {
      return 50;
    } else if (value <= 74) {
      return 74;
    } else {
      return 100;
    }
  }

  return (
    <div className="slider-container">
      <span className='left'>Left Media</span>
      <input
        type="range"
        min="1"
        max="100"
        value={localValue}
        className="slider"
        onChange={handleChange}
        onMouseUp={handleRelease}
        onTouchEnd={handleRelease}
      />
      <span className='right'>Right Media</span>
    </div>
  );
}

export default Slider;
