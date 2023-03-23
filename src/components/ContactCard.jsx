import React, { useState } from "react";

const ContactCard = ({ contact, contacts, setContacts }) => {
  const deleteHandler = () => {
    const result = contacts.filter((element) => {
      if (element.id !== contact.id) {
        return true;
      }
    });
    setContacts(result);
  };
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{contact.title}</h4>
        <p className="card-relation">{contact.relationship}</p>
        <p className="card-phone">{contact.phone}</p>
        <button onClick={deleteHandler} className="card-delate">
          Delete
        </button>
      </div>
    </div>
  );
};
export default ContactCard;
