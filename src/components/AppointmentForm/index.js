import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import doctorsData from '../data/doctors.json';
import './index.css';

const AppointmentForm = () => {
  const { id } = useParams();
  const doctor = doctorsData.find((doc) => doc.id.toString() === id);

  const [formData, setFormData] = useState({ name: '', email: '', date: '', time: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!doctor) return <div className="appointment-form">Doctor not found</div>;

  return (
    <div className="appointment-form">
      {submitted ? (
        <div className="confirmation">
          <h2>Appointment Confirmed!</h2>
          <p>You have booked an appointment with <strong>{doctor.name}</strong> on <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Book Appointment with {doctor.name}</h2>
          <label>Patient Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />

          <label>Time</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />

          <button type="submit" className="submit-btn">Confirm Appointment</button>
        </form>
      )}
    </div>
  );
};

export default AppointmentForm;
