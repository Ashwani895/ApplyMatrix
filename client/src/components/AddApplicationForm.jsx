import React, { useState } from "react";
import axios from "axios";
import "./AddApplicationForm.css";


function AddApplicationForm({ fetchApplications }) {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "Applied",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/api/application", formData);

      setFormData({
        company: "",
        role: "",
        status: "Applied",
        date: "",
      });

      if (fetchApplications) {
        fetchApplications();
      }
    } catch (error) {
      console.error("Error adding application:", error);
    }
  };

  return (
    <div id="add-application-form">
      <form className="application-form" onSubmit={handleSubmit}>
        <h2>Add New Application</h2>

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="role"
          placeholder="Job Role"
          value={formData.role}
          onChange={handleChange}
          required
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Application</button>
      </form>
    </div>
  );
}

export default AddApplicationForm;
