import React, { useState, useEffect } from 'react';
import './Slider.css';

function Slider({ onChange, value }) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const calculatePoliticalView = (value) => {
    if (value <= 20) {
      return 'left';
    } else if (value <= 40) {
      return 'midleft';
    } else if (value <= 60) {
      return 'center';
    } else if (value <= 80) {
      return 'midright';
    } else {
      return 'right';
    }
  }

  const handleChange = (event) => {
    setLocalValue(parseInt(event.target.value, 10));
  };

  const handleRelease = (event) => {
    const value = parseInt(event.target.value, 10);
    setLocalValue(value);
    onChange(calculatePoliticalView(value));
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
        onBlur={handleRelease}
      />
      <span className='right'>Right Media</span>
    </div>
  );
}

export default Slider;
