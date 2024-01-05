import React, { useState } from 'react';
import axios from 'axios';

const ItemForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

// Check if token is retrieved properly
console.log('CSRF Token:', token);

// Include the token in Axios request
axios.post('/items', formData, {
    headers: {
        'X-CSRF-TOKEN': token,
    },
})
.then(response => {
    // Handle response
})
.catch(error => {
    // Handle error
});
  };

  return (
    <div id="app" data-csrf-token="{{ csrf_token() }}">
      <h2>Create Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default ItemForm;
