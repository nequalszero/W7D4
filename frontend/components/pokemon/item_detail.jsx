import React from 'react';

const ItemDetail = ({itemDetail}) => {
  console.log("Hi from Item Detail", itemDetail);
  if (itemDetail.name) {
    return (
      <div>
        <h2>{itemDetail.name}</h2>
        <li>Happiness: {itemDetail.happiness}</li>
        <li>Price: ${itemDetail.price}</li>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ItemDetail;
