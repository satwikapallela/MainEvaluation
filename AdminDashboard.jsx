import React from 'react';
import RestaurantCard from '../components/RestaurantCard.jsx';
import RestaurantForm from '../components/RestaurantForm.jsx';

function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <RestaurantForm />
      <RestaurantCard />
    </div>
  );
}

export default AdminDashboard;
