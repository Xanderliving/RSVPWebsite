import React, { useState } from 'react';
import './RSVPceromony.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RSVPafters() {
  const [name, setName] = useState('');
    const [rsvp, setRsvp] = useState('');
  const [many, setMany] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState(1); // Changed the state variable name to number
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/items', {
        Email: email,
        Name: name, // Corrected to use name state variable
        Role: "Afters",
        RSVP: rsvp,
        Many: number // Corrected to use number state variable
      });

      if (response.status === 200) {
        console.log('Data saved successfully');
        // Navigate to homepage
        history.push('/homepage', { email: email });
      }
    } catch (error) {
      console.error('Error:', error);
      // Optionally, you can handle errors here
    }
  };

  return (
    <div className="invitation-form-container">
      <form onSubmit={handleSubmit} className="invitation-form">
        <h2>You have been invited to the After party on 6th july 2025 at 7pm, please enter your name, if you can come, and how many.</h2>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Can you come?
          <div className="radio-buttons">
            <label>
              Yes
              <input type="radio" value="Yes" checked={rsvp === "Yes"} onChange={() => setRsvp("Yes")} />
            </label>
            <label>
              No
              <input type="radio" value="No" checked={rsvp === "No"} onChange={() => setRsvp("No")} />
            </label>
          </div>
        </label>
        {rsvp === "Yes" && (
          <label>
            How many are coming?
            <input type="number" value={number} min="1" onChange={(e) => setNumber(e.target.value)} />
          </label>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RSVPafters;
