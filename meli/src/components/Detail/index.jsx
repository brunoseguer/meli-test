import React from 'react';

const ItemDetail = ({ match }) => {
  console.log('Match received: ', match);
  return <h1>Hello {match.params.id}!</h1>;
};

export default ItemDetail;
