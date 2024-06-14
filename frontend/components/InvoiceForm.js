import React, { useState } from 'react';

const InvoiceForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    clientAddress: '',
    invoiceItems: [],
    invoiceTotal: 0,
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

      <label htmlFor="invoiceItems">Invoice Items:</label>
      {/* Code to manage and display invoice items */}
      <label htmlFor="invoiceTotal">Invoice Total:</label>
      <input
        type="number"
        id="invoiceTotal"
        name="invoiceTotal"
        value={formData.invoiceTotal}
        onChange={handleChange}
      />

      <button type="submit">Submit Invoice</button>
    </form>
  );
};

export default InvoiceForm;
