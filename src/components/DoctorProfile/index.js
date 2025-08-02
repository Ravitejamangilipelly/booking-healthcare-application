import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import doctorsData from '../data/doctors.json';
import './index.css';

const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctorsData.find((doc) => doc.id.toString() === id);

  if (!doctor) {
    return <div className="doctor-profile">Doctor not found</div>;
  }

  return (
    <div className="doctor-profile">
      <div className="profile-card">
        <img src={doctor.image} alt={doctor.name} className="profile-image" />
        <div className="profile-details">
          <h2>{doctor.name}</h2>
          <p><strong>Specialization:</strong> {doctor.specialization}</p>
          <p><strong>Availability:</strong> {doctor.availability}</p>
          <button className="book-btn" onClick={() => navigate(`/book/${doctor.id}`)}>Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
