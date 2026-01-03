import React from 'react';

function RestaurantCard() {
  const restaurants = [
    { id: 1, name: 'Pizza Place', location: 'Downtown' },
    { id: 2, name: 'Burger Hub', location: 'Uptown' }
  ];

  return (
    <div>
      {restaurants.map(r => (
        <div key={r.id} style={{ border: '1px solid black', padding: '10px', margin: '10px 0' }}>
          <h3>{r.name}</h3>
          <p>{r.location}</p>
        </div>
      ))}
    </div>
  );
}

export default RestaurantCard;
