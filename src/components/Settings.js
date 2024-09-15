import React, { useState, useEffect } from "react";
import "../styles/Settings.css";
import "../styles/DarkMode.css"; // Add this import

function Settings() {
  const [settings, setSettings] = useState({
    theme: "light",
    notifications: true,
    language: "en",
    dataSync: "daily",
    currency: "USD",
    timeZone: "UTC",
    defaultView: "dashboard",
  });

  useEffect(() => {
    // Apply theme when component mounts or theme changes
    document.body.className = settings.theme;
  }, [settings.theme]);

  const handleSettingChange = (setting, value) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: value,
    }));
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>

      <div className="setting-section">
        <h2>Appearance</h2>
        <label>
          Theme:
          <select
            value={settings.theme}
            onChange={(e) => handleSettingChange("theme", e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>

      <div className="setting-section">
        <h2>Notifications</h2>
        <label>
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={(e) =>
              handleSettingChange("notifications", e.target.checked)
            }
          />
          Enable notifications
        </label>
      </div>

      <div className="setting-section">
        <h2>Language</h2>
        <label>
          Language:
          <select
            value={settings.language}
            onChange={(e) => handleSettingChange("language", e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </label>
      </div>

      <div className="setting-section">
        <h2>Data Synchronization</h2>
        <label>
          Sync frequency:
          <select
            value={settings.dataSync}
            onChange={(e) => handleSettingChange("dataSync", e.target.value)}
          >
            <option value="hourly">Hourly</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
        </label>
      </div>

      <div className="setting-section">
        <h2>Regional Settings</h2>
        <label>
          Currency:
          <select
            value={settings.currency}
            onChange={(e) => handleSettingChange("currency", e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </label>
        <label>
          Time Zone:
          <select
            value={settings.timeZone}
            onChange={(e) => handleSettingChange("timeZone", e.target.value)}
          >
            <option value="UTC">UTC</option>
            <option value="EST">EST</option>
            <option value="PST">PST</option>
          </select>
        </label>
      </div>

      <div className="setting-section">
        <h2>Default View</h2>
        <label>
          Default page:
          <select
            value={settings.defaultView}
            onChange={(e) => handleSettingChange("defaultView", e.target.value)}
          >
            <option value="dashboard">Dashboard</option>
            <option value="leads">Leads</option>
            <option value="opportunities">Opportunities</option>
            <option value="tasks">Tasks</option>
          </select>
        </label>
      </div>

      <button className="save-settings">Save Settings</button>
    </div>
  );
}

export default Settings;
