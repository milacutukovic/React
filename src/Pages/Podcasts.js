import React from 'react';
//import './Podcasts.css';  // Add some styling if necessary

function Podcasts() {
  return (
    <div className="podcasts">
      <h1>Podcast Gallery</h1>
      <p>Check out all our amazing podcasts!</p>
      {/* You can replace this with a dynamic list of podcasts in the future */}
      <ul>
        <li>Podcast Episode 1</li>
        <li>Podcast Episode 2</li>
        <li>Podcast Episode 3</li>
      </ul>
    </div>
  );
}

export default Podcasts;
