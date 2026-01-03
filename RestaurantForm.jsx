import React from 'react';

function RestaurantForm() {
  return (
    <div>
      <h2>Add New Restaurant</h2>
      <form>
        <input type="text" placeholder="Restaurant Name" />
        <input type="text" placeholder="Location" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default RestaurantForm;
