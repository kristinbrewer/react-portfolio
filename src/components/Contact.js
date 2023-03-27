import React from 'react';
import { useState } from 'react';
import '../App.css';

export default function Contact() {
    //form
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
      });
    //on blur for cursor 
    const [isRequired, setIsRequired] = useState(false);
    const handleBlur = (event) => {
        if (event.target.value === "") {
        setIsRequired(true);
        } else {
        setIsRequired(false);
        }
    };
    //email validation
    const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsValidEmail(validateEmail(event.target.value));
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  return (
    <div className='contact'>
      <h1>Contact Page</h1>
      <form className='form'>
      <label>
        Name:
        <input
            type="text"
            onBlur={handleBlur}
            value={form.name}
            onChange={e => {
            setForm({
              ...form,
              name: e.target.value
            });
          }}
        />
        {isRequired && <span style={{ color: "red" }}>This field is required</span>}
      </label>
      <br></br>
      <label>
      Email:
        <input
        type="email"
        onBlur={handleBlur}
          value={form.email}
          onChange={e => {
            handleEmailChange();
            setForm({
              ...form,
              email: e.target.value
            });
          }}
        />
        {isRequired && <span style={{ color: "red" }}>This field is required</span>}
        {email !== "" && !isValidEmail && (
          <span style={{ color: "red" }}>Invalid email address</span>
        )}
      </label>
      <br></br>
      <label>
        Message:
        <input
        type="text"
        onBlur={handleBlur}
          value={form.message}
          onChange={e => {
            setForm({
              ...form,
              message: e.target.value
            });
          }}
        />
        {isRequired && <span style={{ color: "red" }}>This field is required</span>}
      </label>
      <br></br>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}
