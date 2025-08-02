import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import doctors from "../../data/doctors.json";
import "./index.css";

function DoctorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find((doc) => doc.id.toString() === id);

  if (!doctor) return <div>Doctor not found</div>;

  return (
    <div className="details-container">
      <img src={doctor.image} alt={doctor.name} className="profile-img" />
      <h2>{doctor.name}</h2>
      <p>{doctor.specialization}</p>
      <h4>Availability:</h4>
      <ul>
        {doctor.schedule.map((slot, index) => (
          <li className="list" key={index}>{slot}</li>
        ))}
      </ul>
      <button className="button-book" onClick={() => navigate(`/book/${doctor.id}`)}>Book Appointment</button>
    </div>
  );
}

export default DoctorDetails;