import React from 'react';
import { Link } from 'react-router';

const HuddleItem = ({huddle}) => {
  return (
    <div className="group-huddle-container animated fadeInRight">
      <div className="group-huddle-detail-container">
        <div className="group-huddle-detail-left">
          <h2 className="huddle-title">{huddle.title}</h2>
          <h3 className="huddle-location">{huddle.location}</h3>
        </div>
        <div className="group-huddle-detail-right">
          <h3 className="huddle-date">{huddle.day}</h3>
          <h3 className="huddle-time">{huddle.time}</h3>
        </div>
      </div>
    </div>
  )
}

export default HuddleItem;
