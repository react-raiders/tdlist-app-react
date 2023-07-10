import React, { useState, useEffect } from 'react';

export default function TestComponent () {
	const [number, setNumber] = useState('');
  const [total, setTotal] = useState(0);

  function handleChange (event) {
    const entry = event.target.value

    if (isNaN(entry)) {
      alert('Sorry!  Your entry was not a number.  Please try again.');
    } else {
      setNumber(Number(entry));
    };
  };

  function handleSubmit (event) {
    event.preventDefault();
    
    setTotal((prev) => prev + number);
    setNumber('');
  };

  function handleReset () {
    setNumber('');
    setTotal(0);
    alert('App Reset!');
  };

  return (
    <div style={{marginLeft: 50}}>
      <h1>This is a simple app for producing running totals</h1>
      <h2>Current total is: {total}</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' value={number} placeholder='Enter your number here' onChange={handleChange} />
        <p>
          Your current entry is: {number ? number : 'Nothing yet!'}
        </p>
        <span><input type="submit" value="Submit" /></span>
        <span><button onClick={handleReset}>Reset App!</button></span>
      </form>
    </div>
  );
};