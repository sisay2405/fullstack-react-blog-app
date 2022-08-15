/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './login.css';
import styled from 'styled-components';

const FormWrapper = styled.form`
text-align: center;
  label {
    display: block;
    font-weight: 700;
  }
  input {
    margin-bottom: 2rem;
  }
  input {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    width: 30%;
  }
  button {
    margin-left: 0;
    margin: 2rem 0;
    padding: 0.5rem 1rem;
  }  
`;
function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  // function to update state of name with
  // value enter by user in form
  const handleChange = (e) => {
    setName(e.target.value);
  };
  // function to update state of email with value
  // enter by user in form
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  // function to update state of password with
  // value enter by user in form
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  // function to update state of confirm password
  // with value enter by user in form
  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  };
  // below function will be called when user
  // click on submit button .
  const handleSubmit = (e) => {
    if (password !== confPassword) {
      console.log('password Not Match');
    } else {
      console.log('A form was submitted with Name :"' + name +
      '" and Email :"' + email + '"');
    }
    e.preventDefault();
  };

  return (
    <main>
      <FormWrapper>
        <header className="App-header">
          <form onSubmit={(e) => { handleSubmit(e); }}>
            <h3> Sign-up Form </h3>
            <label>
              Name:
            </label><br />
            <input type="text" value={name} required onChange={(e) => { handleChange(e); }} /><br />
            <label>
              Email:
            </label><br />
            <input type="email" value={email} required onChange={(e) => { handleEmailChange(e); }} /><br />
            <label>
              Password:
            </label><br />
            <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e); }} /><br />
            <label>
              Confirm Password:
            </label><br />
            <input type="password" value={confPassword} required onChange={(e) => { handleConfPasswordChange(e); }} /><br />
            <input type="submit" value="Submit" />
          </form>
        </header>
      </FormWrapper>
    </main>
  );
}

export default Register;
