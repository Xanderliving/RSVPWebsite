import React from 'react';
import { useLocation } from 'react-router-dom';

function HomePage() {
  const location = useLocation();
  const { email } = location.state;

  // You can use the email to fetch user's role and render appropriate content

  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <p>Email: {email}</p>
      {/* Render content based on user's role */}
    </div>
  );
}

export default HomePage;