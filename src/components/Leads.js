import React, { useState } from "react";
import "../styles/Leads.css";

const Leads = () => {
  const [leads, setLeads] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", status: "New" },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      status: "Contacted",
    },
  ]);

  const [newLead, setNewLead] = useState({
    name: "",
    email: "",
    status: "New",
  });

  const handleInputChange = (e) => {
    setNewLead({ ...newLead, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLeads([...leads, { ...newLead, id: leads.length + 1 }]);
    setNewLead({ name: "", email: "", status: "New" });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "New":
        return "status-new";
      case "Contacted":
        return "status-contacted";
      case "Qualified":
        return "status-qualified";
      case "Lost":
        return "status-lost";
      default:
        return "";
    }
  };

  return (
    <div className="leads-container">
      <h1>Leads</h1>

      <div className="leads-table-container">
        <table className="leads-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className={getStatusColor(lead.status)}>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Add New Lead</h2>
      <form onSubmit={handleSubmit} className="lead-form">
        <input
          type="text"
          name="name"
          value={newLead.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={newLead.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <select
          name="status"
          value={newLead.status}
          onChange={handleInputChange}
        >
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Qualified">Qualified</option>
          <option value="Lost">Lost</option>
        </select>
        <button type="submit">Add Lead</button>
      </form>
    </div>
  );
};

export default Leads;
