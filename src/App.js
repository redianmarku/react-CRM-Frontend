import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Contacts from "./components/Contacts";
import Leads from "./components/Leads";
import Opportunities from "./components/Opportunities";
import Tasks from "./components/Tasks";
import Reports from "./components/Reports";
import Settings from "./components/Settings";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <div className="app">
              <Navigation />
              <div className="main-content">
                <Menu />
                <div className="content">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/leads" element={<Leads />} />
                    <Route path="/opportunities" element={<Opportunities />} />
                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </div>
              </div>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
