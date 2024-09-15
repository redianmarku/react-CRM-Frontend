import React, { useState } from "react";
import "../../styles/ErrorMessage.css";

export default function ErrorMessage({ message }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;
  return (
    <div className="error-message">
      {message}
      <button className="close-button" onClick={() => setVisible(false)}>
        &times;
      </button>
      {message}
    </div>
  );
}
