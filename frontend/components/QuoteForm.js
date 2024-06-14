import React, { useState } from 'react';

const QuoteForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    clientAddress: '',
    quoteItems: [],
    quoteTotal: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="clientName">Client Name:</label>
      <input
        type="text"
        id="clientName"
        name="clientName"
        value={formData.clientName}
        onChange={handleChange}
      />

      <label htmlFor="clientEmail">Client Email:</label>
      <input
        type="email"
        id="clientEmail"
        name="clientEmail"
        value={formData.clientEmail}
        onChange={handleChange}
      />

      <label htmlFor="clientAddress">Client Address:</label>
      <input
        type="text"
        id="clientAddress"
        name="clientAddress"
        value={formData.clientAddress}
        onChange={handleChange}
      />

      <label htmlFor="quoteItems">Quote Items:</label>
      {/* Code to manage and display quote items */}
      <label htmlFor="quoteTotal">Quote Total:</label>
      <input
        type="number"
        id="quoteTotal"
        name="quoteTotal"
        value={formData.quoteTotal}
        onChange={handleChange}
      />

      <button type="submit">Submit Quote</button>
    </form>
  );
};

export default QuoteForm;
