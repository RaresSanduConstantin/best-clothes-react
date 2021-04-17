import React, { useState } from "react";
import "./contact.styles.scss";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { contactMessageStart } from "../../redux/contact/contact.action";
import { connect } from "react-redux";

const Contact = () => {
  const [userMesssage, setUserMesssage] = useState({
    title: "",
    email: "",
    name: "",
    message: "",
  });
  const { title, email, name, message } = userMesssage;

  const handleSubmit = async (event) => {
    event.preventDefault();

    contactMessageStart(title, email, message);

    setUserMesssage({
      title: "",
      email: "",
      name: "",
      message: "",
    });
  };

  const handleChaange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setUserMesssage({ ...userMesssage, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">Send us a message</h2>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="title"
          value={title}
          onChange={handleChaange}
          label="Title"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChaange}
          label="Email"
          required
        />
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handleChaange}
          label="Name"
          required
        />
        <FormInput
          type="text"
          name="message"
          value={message}
          onChange={handleChaange}
          label="Message"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Send your message</CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  contactMessageStart: (title, email, message) =>
    dispatch(contactMessageStart({ title, email, message })),
});

export default connect(null, mapDispatchToProps)(Contact);
