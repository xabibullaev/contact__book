import React, { useState } from "react";

const ContactForm = ({ contacts, setContacts }) => {
  const [title, setTitle] = useState("");
  const [relationship, setRelationsip] = useState("");
  const [phone, setPhone] = useState("");

  //   evt__part
  const submitHandler = (evt) => {
    evt.preventDefault();
    const newContact = {
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1,
      title,
      relationship,
      phone,
    };
    setContacts([...contacts, newContact]);
  };
  return (
    <form onSubmit={submitHandler}>
      <h3 className="title">New contact form </h3>
      <input
        type="text"
        placeholder="title"
        className="inp-title inp"
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
      />
      <input
        placeholder="relationship"
        className="inp-relation inp"
        type="text"
        value={relationship}
        onChange={(evt) => setRelationsip(evt.target.value)}
      />
      <input
        className="inp-phone inp"
        type="number"
        placeholder="phone number"
        value={phone}
        onChange={(evt) => setPhone(evt.target.value)}
      />
      <button type="submit" className="btn">
        Add contact
      </button>
    </form>
  );
};
export default ContactForm;
