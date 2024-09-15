import React, { useState, useEffect } from "react";
import "../styles/Contacts.css";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    // Fetch contacts from an API or load from local storage
    // For now, we'll use some dummy data
    const dummyContacts = [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "123-456-7890",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "098-765-4321",
      },
    ];
    setContacts(dummyContacts);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleAddContact = (e) => {
    e.preventDefault();
    if (newContact.name && newContact.email) {
      setContacts([...contacts, { ...newContact, id: Date.now() }]);
      setNewContact({ name: "", email: "", phone: "" });
    }
  };

  return (
    <div className="contacts-container">
      <h1>Contacts</h1>
      <form onSubmit={handleAddContact} className="contact-form">
        <input
          type="text"
          name="name"
          value={newContact.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={newContact.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <input
          type="tel"
          name="phone"
          value={newContact.phone}
          onChange={handleInputChange}
          placeholder="Phone"
        />
        <button type="submit">Add Contact</button>
      </form>
      <ul className="contact-list">
        {contacts.map((contact) => (
          <li key={contact.id} className="contact-item">
            <h3>{contact.name}</h3>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contacts;
