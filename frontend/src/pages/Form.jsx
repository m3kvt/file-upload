import React, { useState } from 'react'
import Display from './Display';
import { Link } from 'react-router-dom';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        contactNo: '',
        address: '',
        document: null
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleFileChange = (e) => {
        setFormData({ ...formData, document: e.target.files[0] });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Log form data to ensure it's correct
        console.log(formData);
       
      };
    
      return (
        <div>
          <h2>Form</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Contact No:</label>
              <input
                type="tel"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Birth certificate:</label>
              <input
                type="file"
                name="document"
                onChange={handleFileChange}
                required
              />
            </div>
            <div>
              <label>Marklist:</label>
              <input
                type="file"
                name="document"
                onChange={handleFileChange}
                required
              />
            </div>
            <button type="submit">
            <Link to ='/display'>Submit</Link></button>
          </form>
          
        </div>
      );
    }

export default Form