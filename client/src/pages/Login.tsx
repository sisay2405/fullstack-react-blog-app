/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, FormEvent, useState } from 'react';
import './login.css';
// import { isEmail } from "validator";
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

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    dispatch(userLogin({
      email,
      password,
      username
    }));
    navigate('/');

  };

  // const validEmail = (value: any) => {
  //   if (!isEmail(value)) {
  //     return (
  //       <div className="alert alert-danger" role="alert">
  //         This is not a valid email.
  //       </div>
  //     );
  //   }
  // };
  // const vpassword = (value: string | any[]) => {
  //   if (value.length < 6 || value.length > 40) {
  //     return (
  //       <div className="alert alert-danger" role="alert">
  //         The password must be between 6 and 40 characters.
  //       </div>
  //     );
  //   }
  // };
  return (
    <main>
      <FormWrapper onSubmit={ handleSubmit }>
            <h3> Login Form </h3>
            <label>
              E-Mail:
            </label><br />
            <input  value={email} required onChange={handleEmailChange} type="email" /><br />
            <label>
              Password:
            </label><br />
            <input type="password" value={password} required onChange={handlePasswordChange} /><br />
            <input type="submit" value="Submit" />
      </FormWrapper>
    </main>
  );
}

export default Login;
