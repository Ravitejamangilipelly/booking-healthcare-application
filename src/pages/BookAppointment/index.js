import React, { useState } from "react";
import { useParams } from "react-router-dom";
import doctors from "../../data/doctors.json";
import "./index.css";

function BookAppointment() {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id.toString() === id);
  const [form, setForm] = useState({ name: "", email: "", datetime: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="book-container">
      <h2>Book Appointment with {doctor.name}</h2>
      {submitted ? (
        <p className="confirmation">Appointment booked successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className="appointment-form">
          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />
          <input
            type="datetime-local"
            name="datetime"
            required
            onChange={handleChange}
          />
          <button type="submit">Confirm Appointment</button>
        </form>
      )}
    </div>
  );
}

export default BookAppointment;