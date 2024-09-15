import React, { useState, useEffect } from "react";
import "../styles/Opportunities.css";

function Opportunities() {
  const [opportunities, setOpportunities] = useState([]);
  const [newOpportunity, setNewOpportunity] = useState({
    name: "",
    value: "",
    stage: "Prospecting",
    closeDate: "",
  });

  useEffect(() => {
    // Fetch opportunities from an API or load from local storage
    // For now, we'll use some dummy data
    const dummyOpportunities = [
      {
        id: 1,
        name: "Big Corp Deal",
        value: 100000,
        stage: "Negotiation",
        closeDate: "2023-12-31",
      },
      {
        id: 2,
        name: "Small Business Contract",
        value: 25000,
        stage: "Proposal",
        closeDate: "2023-09-30",
      },
    ];
    setOpportunities(dummyOpportunities);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOpportunity({ ...newOpportunity, [name]: value });
  };

  const handleAddOpportunity = (e) => {
    e.preventDefault();
    if (newOpportunity.name && newOpportunity.value) {
      setOpportunities([
        ...opportunities,
        { ...newOpportunity, id: Date.now() },
      ]);
      setNewOpportunity({
        name: "",
        value: "",
        stage: "Prospecting",
        closeDate: "",
      });
    }
  };

  const getStageColor = (stage) => {
    switch (stage) {
      case "Prospecting":
        return "stage-prospecting";
      case "Qualification":
        return "stage-qualification";
      case "Proposal":
        return "stage-proposal";
      case "Negotiation":
        return "stage-negotiation";
      case "Closed Won":
        return "stage-closed-won";
      case "Closed Lost":
        return "stage-closed-lost";
      default:
        return "";
    }
  };

  return (
    <div className="opportunities-container">
      <h1>Opportunities</h1>

      <div className="opportunities-table-container">
        <table className="opportunities-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
              <th>Stage</th>
              <th>Close Date</th>
            </tr>
          </thead>
          <tbody>
            {opportunities.map((opportunity) => (
              <tr
                key={opportunity.id}
                className={getStageColor(opportunity.stage)}
              >
                <td>{opportunity.name}</td>
                <td>${opportunity.value.toLocaleString()}</td>
                <td>{opportunity.stage}</td>
                <td>{opportunity.closeDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Add New Opportunity</h2>
      <form onSubmit={handleAddOpportunity} className="opportunity-form">
        <input
          type="text"
          name="name"
          value={newOpportunity.name}
          onChange={handleInputChange}
          placeholder="Opportunity Name"
          required
        />
        <input
          type="number"
          name="value"
          value={newOpportunity.value}
          onChange={handleInputChange}
          placeholder="Value"
          required
        />
        <select
          name="stage"
          value={newOpportunity.stage}
          onChange={handleInputChange}
        >
          <option value="Prospecting">Prospecting</option>
          <option value="Qualification">Qualification</option>
          <option value="Proposal">Proposal</option>
          <option value="Negotiation">Negotiation</option>
          <option value="Closed Won">Closed Won</option>
          <option value="Closed Lost">Closed Lost</option>
        </select>
        <input
          type="date"
          name="closeDate"
          value={newOpportunity.closeDate}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Opportunity</button>
      </form>
    </div>
  );
}

export default Opportunities;
