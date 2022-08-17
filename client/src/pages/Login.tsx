/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, FormEvent, useState } from 'react';
import './login.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../types/hooks';
import { userLogin } from '../store/userSlice';
const FormWrapper = styled.form`
text-align: center;
  label {
    display: block;
    font-weight: 700;
  }
  input {
    margin-bottom: 2rem;
  }
  input{
    font-size: 1rem;
    padding: 0.5rem 1rem;
    width: 30%;
  }
  button {
    margin-left: 0;
    margin: 2rem 0;
    padding: 0.5rem 1rem;
    // width: 100%;
  } 
    form {
    border:2px solid skyblue;
    padding: 30px;
    }
  
    .App-header {
    background-color: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: black;
    }  
`;
function Login() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [confPassword, setConfPassword] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const RegisterData = useAppSelector((state) => state.categories.value);
  const handleChange =(e: ChangeEvent<HTMLInputElement>)=> {
    setUserName(e.target.value);
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange =(e: ChangeEvent<HTMLInputElement>)=> {
    setPassword(e.target.value);
  };

  const handleSubmit =(e: FormEvent<HTMLFormElement>) => {
    if (password) {
      console.log('A form was submitted with Name :"' + username +
      '" and Email :"' + email + '"');
      dispatch( userLogin({
        email, password,
        username
      }));
    }
    e.preventDefault();
  };

  return (
    <main>
      <FormWrapper>
        <header className="App-headerrr">
          <form onSubmit={(e) => { handleSubmit(e); }}>
            <h3> Login Form </h3>
            <label>
              Name:
            </label><br />
            <input type="text" value={username} required onChange={(e) => { handleChange(e); }} /><br />
            <label>
              Password:
            </label><br />
            <input type="submit" value="Submit" />
          </form>
        </header>
      </FormWrapper>
    </main>
  );
}

export default Login;
