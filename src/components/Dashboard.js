import React, { useState, useEffect } from "react";
import DataFetcher from "./DataFetcher";
import "../styles/Dashboard.css";

function Dashboard() {
  const [salesData, setSalesData] = useState(null);
  const [leadData, setLeadData] = useState(null);
  const [taskData, setTaskData] = useState(null);
  const [revenueData, setRevenueData] = useState(null);
  const [customerData, setCustomerData] = useState(null);

  useEffect(() => {
    // Simulating data fetching
    const fetchData = async () => {
      // In a real application, these would be API calls
      setSalesData({ total: 150000, growth: 15 });
      setLeadData({ count: 50, conversionRate: 20 });
      setTaskData({ completed: 30, pending: 15 });
      setRevenueData({ current: 200000, previous: 180000 });
      setCustomerData({ total: 1000, new: 50, churn: 10 });
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>Sales Overview</h2>
          {salesData ? (
            <>
              <p>Total Sales: ${salesData.total}</p>
              <p>Growth: {salesData.growth}%</p>
            </>
          ) : (
            <p>Loading sales data...</p>
          )}
        </div>
        <div className="dashboard-card">
          <h2>Lead Statistics</h2>
          {leadData ? (
            <>
              <p>New Leads: {leadData.count}</p>
              <p>Conversion Rate: {leadData.conversionRate}%</p>
            </>
          ) : (
            <p>Loading lead data...</p>
          )}
        </div>
        <div className="dashboard-card">
          <h2>Task Summary</h2>
          {taskData ? (
            <>
              <p>Completed Tasks: {taskData.completed}</p>
              <p>Pending Tasks: {taskData.pending}</p>
            </>
          ) : (
            <p>Loading task data...</p>
          )}
        </div>
        <div className="dashboard-card">
          <h2>Revenue Comparison</h2>
          {revenueData ? (
            <>
              <p>Current Revenue: ${revenueData.current}</p>
              <p>Previous Revenue: ${revenueData.previous}</p>
            </>
          ) : (
            <p>Loading revenue data...</p>
          )}
        </div>
        <div className="dashboard-card">
          <h2>Customer Metrics</h2>
          {customerData ? (
            <>
              <p>Total Customers: {customerData.total}</p>
              <p>New Customers: {customerData.new}</p>
              <p>Churn Rate: {customerData.churn}%</p>
            </>
          ) : (
            <p>Loading customer data...</p>
          )}
        </div>
      </div>
      <div className="chart-container">
        <h2>Sales Chart</h2>
        <DataFetcher endpoint="/api/sales" />
      </div>
      <div className="chart-container">
        <h2>Lead Conversion Chart</h2>
        <DataFetcher endpoint="/api/leads" />
      </div>
      <div className="chart-container">
        <h2>Revenue Trend</h2>
        <DataFetcher endpoint="/api/revenue" />
      </div>
    </div>
  );
}

export default Dashboard;
