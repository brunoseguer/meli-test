import React from 'react';

const Item = ({ item }) => {
  return (
    <div>
      <li><h1>{item.title}</h1></li>
    </div>
  );
};

export default Item;
