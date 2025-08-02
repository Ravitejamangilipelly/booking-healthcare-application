import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function DoctorCard({ doctor }) {
  const navigate = useNavigate();

  return (
    <div className="doctor-card" onClick={() => navigate(`/doctor/${doctor.id}`)}>
      <img src={doctor.image} alt={doctor.name} />
      <h3>{doctor.name}</h3>
      <p>{doctor.specialization}</p>
      <span className={`status ${doctor.availability.toLowerCase().replace(/ /g, "-")}`}>
        {doctor.availability}
      </span>
    </div>
  );
}

export default DoctorCard;