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
    if (value <= 33) {
      politicalView = 'left';
    } else if (value > 33 && value <= 66) {
      politicalView = 'center';
    } else {
      politicalView = 'right';
    }
    onChange(politicalView);
  }

  const roundToNearestPosition = (value) => {
    if (value <= 33) {
      return 1;
    } else if (value <= 66) {
      return 50;
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
