import React from 'react';

const Item = ({ item }) => {
  console.log('id y title: ', item);
  return (
    <div>
      <li><h1>{item.title}</h1></li>
    </div>
)
};

export default Item;
