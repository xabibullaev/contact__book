import React, { useState } from "react";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
const ContactBook = () => {
  const [contacts, setContacts] = useState([]);
  return (
    <section className="container">
      <h2 className="main-title">Contact Book</h2>
      <div className="flex">
        <ContactForm contacts={contacts} setContacts={setContacts} />
        <div className="card-box">
          <h3 className="contact-title">Contacts</h3>
          <div className="cards">
            {contacts.map((contact, i) => (
              <ContactCard
                contacts={contacts}
                setContacts={setContacts}
                key={i}
                contact={contact}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBook;
