import React, { useState } from "react";
import DoctorCard from "../../components/DoctorCard";
import doctors from "../../data/doctors.json";
import "./index.css";

function Home() {
  const [search, setSearch] = useState("");
  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <div>
   <h1 className="texth1">Welcome to NirogGyan HealthCare</h1>
      <p className="textp">Your trusted platform to book healthcare appointments with top doctors.</p>
    </div>
    <div className="home-container">
      <h1>Find Your Doctor</h1>
      <input
        type="text"
        placeholder="Search by name or specialization"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="doctor-list">
        {filteredDoctors.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
    </>
  );
}


export default Home;
