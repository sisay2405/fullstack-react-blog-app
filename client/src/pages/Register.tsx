/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../types/hooks';
import { userRegister } from '../store/userSlice';
import './login.css';

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
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const RegisterData = useAppSelector((state) => state.categories.value);

  const handleChange =(e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const handleEmailChange =(e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange =(e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleConfPasswordChange = (e: ChangeEvent<HTMLInputElement>)=> {
    setConfPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (password !== confPassword) {
      console.log('password Not Match');
    } else {
      console.log('A form was submitted with Name :"' + username +
      '" and Email :"' + email + '"');
      dispatch(userRegister({ username, email, password }));
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
            <input type="text" value={username} required onChange={(e) => { handleChange(e); }} /><br />
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
