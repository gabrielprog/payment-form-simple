import React from 'react';

import './style.css'

export default function Form() {
    return (
        <div className="form">

            <div className="input">
                <label htmlFor="input">Card Number:</label>
                <input type="text" name="card" />
            </div>
            
            <div className="input">
                <label htmlFor="input">Valid until:</label>
                <input type="text" name="card" />
            </div>
            
            <div className="input">
                <label htmlFor="input">Name:</label>
                <input type="text" name="card" />
            </div>
            
            <div className="input">
                <label htmlFor="input">CVV:</label>
                <input type="text" name="card" />
            </div>

        </div>
    )
}