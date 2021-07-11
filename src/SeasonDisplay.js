import React from 'react';
import Clock from './Clock';
import './SeasonDisplay.css';

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const { message, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon massive icon-left`} />
      <Clock />
      <h1 className="message">{message}</h1>
      <i className={`${iconName} icon massive icon-right`} />
    </div>
  );
};

export default SeasonDisplay;

// Config Obj
const seasonConfig = {
  summer: {
    message: "Let's hit the beach",
    iconName: 'sun',
  },
  winter: {
    message: 'Burrr, it is chilly',
    iconName: 'snowflake',
  },
};

// Helper Func
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    // Northern Hemisphere
    return lat > 0 ? 'summer' : 'winter';
  } else {
    // Southern Hemisphere
    return lat < 0 ? 'winter' : 'summer';
  }
};
