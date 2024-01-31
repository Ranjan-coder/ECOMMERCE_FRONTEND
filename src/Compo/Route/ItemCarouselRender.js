import React from 'react';
import ItemCarousel from './ItemCarouselRender';


const ItemCarouselRender = () => {
  const items = [
    {
      title: 'Item 1',
      description: 'Description for Item 1',
      image: 'item1.jpg'
    },
    {
      title: 'Item 2',
      description: 'Description for Item 2',
      image: 'item2.jpg'
    },
    {
      title: 'Item 3',
      description: 'Description for Item 3',
      image: 'item3.jpg'
    }
  ];

  return (
    <div className="app">
      <h1>My E-commerce Website</h1>
      <ItemCarousel items={items} />
    </div>
  );
};

export default ItemCarouselRender;
