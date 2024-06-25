import React from 'react';
import { useLocation } from 'react-router-dom';
export default function Info() {
    const location = useLocation();
    const data = location.state;

    // Process the data as needed
    // Example: Display the data
    return (
        <div>
            <h2>Info Component</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}