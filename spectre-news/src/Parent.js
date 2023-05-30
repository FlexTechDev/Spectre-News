import React, { useState } from 'react';
import NewsFeed from './NewsFeed';
import Slider from './Slider';

function Parent() {
  const [politicalView, setPoliticalView] = useState('center');

  return (
    <div>
      <Slider onChange={setPoliticalView} />
      <NewsFeed politicalView={politicalView} />
    </div>
  );
}

export default Parent;
