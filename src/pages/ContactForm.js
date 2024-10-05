// src/ContactForm.js

import React, { useState } from 'react'; // Import useState
import '../styles.css'; // Ensure your styles are imported

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { fname, lname, message } = formData;
        const mailtoLink = `mailto:neelaksha.b@somaiya.edu?subject=Internet%20programming&body=First Name: ${fname}%0D%0ALast Name: ${lname}%0D%0AMessage: ${message}`;
        window.location.href = mailtoLink;
        setFormData({ fname: '', lname: '', message: '' });
    };

    return (
        <div className="contact-form">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">First name:</label>
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="lname">Last name:</label>
                <input
                    type="text"
                    id="lname"
                    name="lname"
                    value={formData.lname}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <input type="submit" value="Submit" className="btn" />
            </form>
        </div>
    );
};

export default ContactForm;
