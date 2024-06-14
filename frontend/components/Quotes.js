import React, { useState } from 'react';
import axios from 'axios';

const Quote = () => {
  const [quote, setQuote] = useState('');

  const handleRequestQuote = async () => {
    try {
      const response = await axios.get('/api/quote');
      setQuote(response.data);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <div>
      <h1>Request a Quote</h1>
      <button onClick={handleRequestQuote}>Get Quote</button>
      {quote && <p>{quote}</p>}
    </div>
  );
};

export default Quote;
