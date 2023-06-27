import React from 'react';
import './AnimatedHeading.js';

function AnimatedHeading({ text }) {
  return (
    <h1 className="animated-heading">
      {text.split(" ").map((word, index) => 
        <span 
          key={index} 
          style={{ '--delay': `${index * 0.2}s` }}
          className="animated-word"
        >
          {word + (index !== text.split(" ").length - 1 ? "\u00A0" : "")}
        </span>
      )}
    </h1>
  );
}

export default AnimatedHeading;
