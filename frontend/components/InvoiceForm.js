import React, { useState } from 'react';
import axios from 'axios';

const InvoiceForm = () => {
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [items, setItems] = useState([{ name: '', quantity: 0, price: 0 }]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
    const newTotalAmount = newItems.reduce((total, item) => total + item.quantity * item.price, 0);
    setTotalAmount(newTotalAmount);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newInvoice = { clientName, clientAddress, items, totalAmount };
    const res = await axios.post('/api/invoices', newInvoice);
    console.log(res.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Client Name:</label>
        <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} />
      </div>
      <div>
        <label>Client Address:</label>
        <input type="text" value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} />
      </div>
      {items.map((item, index) => (
        <div key={index}>
          <label>Item Name:</label>
          <input type="text" value={item.name} onChange={(e) => handleItemChange(index, 'name', e.target.value)} />
          <label>Quantity:</label>
          <input type="number" value={item.quantity} onChange={(e) => handleItemChange(index, 'quantity', e.target.value)} />
          <label>Price:</label>
          <input type="number" value={item.price} onChange={(e) => handleItemChange(index, 'price', e.target.value)} />
        </div>
      ))}
      <div>
        <label>Total Amount:</label>
        <input type="number" value={totalAmount} readOnly />
      </div>
      <button type="submit">Create Invoice</button>
    </form>
  );
};

export default InvoiceForm;
