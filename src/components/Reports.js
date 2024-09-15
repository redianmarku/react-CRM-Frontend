import React, { useState, useEffect } from "react";
import "../styles/Reports.css";

function Reports() {
  const [leadData, setLeadData] = useState([]);
  const [opportunityData, setOpportunityData] = useState([]);
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    // Fetch data from API or load from local storage
    // For now, we'll use dummy data
    const dummyLeadData = [
      { status: "New", count: 10 },
      { status: "Contacted", count: 15 },
      { status: "Qualified", count: 8 },
      { status: "Lost", count: 5 },
    ];
    setLeadData(dummyLeadData);

    const dummyOpportunityData = [
      { stage: "Prospecting", value: 50000 },
      { stage: "Qualification", value: 75000 },
      { stage: "Proposal", value: 100000 },
      { stage: "Negotiation", value: 150000 },
      { stage: "Closed Won", value: 200000 },
    ];
    setOpportunityData(dummyOpportunityData);

    const dummyTaskData = [
      { status: "Completed", count: 20 },
      { status: "In Progress", count: 15 },
      { status: "Overdue", count: 5 },
    ];
    setTaskData(dummyTaskData);
  }, []);

  const totalLeads = leadData.reduce((sum, item) => sum + item.count, 0);
  const totalOpportunityValue = opportunityData.reduce(
    (sum, item) => sum + item.value,
    0
  );
  const totalTasks = taskData.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="reports-container">
      <h1>Reports</h1>

      <div className="report-section">
        <h2>Lead Status Report</h2>
        <table className="report-table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Count</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {leadData.map((item) => (
              <tr key={item.status}>
                <td>{item.status}</td>
                <td>{item.count}</td>
                <td>{((item.count / totalLeads) * 100).toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>{totalLeads}</td>
              <td>100%</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="report-section">
        <h2>Sales Pipeline Report</h2>
        <table className="report-table">
          <thead>
            <tr>
              <th>Stage</th>
              <th>Value</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {opportunityData.map((item) => (
              <tr key={item.stage}>
                <td>{item.stage}</td>
                <td>${item.value.toLocaleString()}</td>
                <td>
                  {((item.value / totalOpportunityValue) * 100).toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>${totalOpportunityValue.toLocaleString()}</td>
              <td>100%</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="report-section">
        <h2>Task Status Report</h2>
        <table className="report-table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Count</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {taskData.map((item) => (
              <tr key={item.status}>
                <td>{item.status}</td>
                <td>{item.count}</td>
                <td>{((item.count / totalTasks) * 100).toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>{totalTasks}</td>
              <td>100%</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Reports;
