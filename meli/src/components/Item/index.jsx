import React from 'react';
import imgShipping from '../../images/shipping.png';

const Item = ({ item }) => {
  return (
    <div>
      <img src={item.picture} alt="" />
      <p>
        {item.title}
        {`${item.price.amount},${item.price.decimals}`}
        {item.free_shipping && (<img alt="" src={imgShipping} />)}
      </p>
    </div>
  );
};

export default Item;
