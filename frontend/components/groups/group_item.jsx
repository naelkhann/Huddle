import React from 'react';
import { Link } from 'react-router';

const GroupItem = ({group}) => {

  return (
  <div className="group-item-container animated fadeInRight">
    <Link to={`/groups/${group.id}`}>
      <div className="group-item-image">
        <img className="group-item-img" src={group.image} />
        <h3 className="group-item-name">{group.name}</h3>
        <h3 className="group-item-number">We're {group.members.length} members!</h3>
      </div>
    </Link>
  </div>
  );
};

export default GroupItem;
