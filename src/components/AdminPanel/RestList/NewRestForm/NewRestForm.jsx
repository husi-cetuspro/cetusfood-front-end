import React from 'react';
import './NewRestForm.css';
import { addRestaurant } from '../../../services/RestaurationsList.js';
import { Link, useNavigate } from 'react-router-dom';

const AddNewRestForm = () => {
  const [formData, setFormData] = React.useState({});
  const navigate = useNavigate();
  const handleSubmit = e => {
    addRestaurant(formData);
    navigate('../restaurants');
    e.preventDefault();
  }
  const handleInputChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (<>
    <h3 className="title">Dodaj nową restaurację</h3>
    <div className='NewRestForm'>
      <form onSubmit={handleSubmit}>
        <p><label htmlFor="name">Nazwa: </label><input type="text" name='name' id='name' placeholder='nazwa' required={true} onChange={handleInputChange} /></p>
        <p><label htmlFor="email">Email: </label><input type="email" name='email' id='email' placeholder='email' required={true} onChange={handleInputChange} /></p>
        <p><label htmlFor="url">Link do strony: </label><input type="text" name='url' id='url' placeholder='url' required={true} onChange={handleInputChange} /></p>
        <Link to='../restaurants'>Anuluj</Link><button type='submit'>Potwierdź</button>
      </form>
    </div>
  </>)
}

export default AddNewRestForm;