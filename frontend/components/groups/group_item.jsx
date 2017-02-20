import React from 'react';
import { Link } from 'react-router';

const GroupItem = ({group}) => {
  return (
  <div className="group-item-container">
    <Link to={`/groups/${group.id}`}>
      <div className="group-item-image">
        <h3 className="group-item-name">{group.name}</h3>
      </div>
    </Link>
  </div>
  );
};

export default GroupItem;
