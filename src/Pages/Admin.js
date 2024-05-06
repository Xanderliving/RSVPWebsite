// Main.js (Main admin page)
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../Componants/Hamburger';
import Axios from 'axios';

const Admin = () => {
    const [weddingCount, setWeddingCount] = useState(0);
    const [aftersCount, setAftersCount] = useState(0);

    // Fetch data to get counts of people coming to wedding and afters
    useEffect(() => {
        Axios.get(`http://localhost:3001/api/data/count-rsvp`).then((response) => {
            setAftersCount(response.data);
                });
    }, []);

    return (
        <div>
            <Hamburger />

            <div>
                <h1>Welcome to the Admin Page</h1>
                <p>People coming to the wedding: {weddingCount}</p>
                <p>People coming to the afters: {aftersCount}</p>

            </div>
        </div>
    );
}

export default Admin;
