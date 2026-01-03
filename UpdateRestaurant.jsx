import React from 'react';
import { useParams } from 'react-router-dom';

function UpdateRestaurant() {
  const { id } = useParams();
  return (
    <div>
      <h1>Update Restaurant {id}</h1>
      {/* Form to update restaurant details */}
    </div>
  );
}

export default UpdateRestaurant;
