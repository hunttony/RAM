// src/components/ContactForm.js
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (

    <div className="form-shell">
      <h3>Free Case Review</h3>
      <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Phone:
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
      </label>
      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
      </label>
      <button type="submit">Submit your case review.</button>
    </form>
    </div>
  );
};

export default ContactForm;
