import React from 'react';

const GroupItem = ({group}) => {
  return (
  <div>
    <h3>{group.name}</h3>
    <h4>{group.description}</h4>
  </div>
  );
};

export default GroupItem;
