import React, { useState } from 'react';
import './style.css';
import sweetalert from 'sweetalert2';
import signUpIcon from './images/sign-up.png';

const Validation = () => {
  const EmailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const lowercaseRegex = /^(?=.*[a-z])/;
  const uppercaseRegex = /^(?=.*[A-Z])/;
  const specialCharRegex = /^(?=.*[!@#$%^&*])/;
  const numberRegex = /^(?=.*[0-9])/;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [lowercaseError, setLowercaseError] = useState(false);
  const [uppercaseError, setUppercaseError] = useState(false);
  const [specialCharError, setSpecialCharError] = useState(false);
  const [numberError, setNumberError] = useState(false);

  const handleName = (event) => {
    const nameField = event.target.value;
    setnameError(nameField.length < 3);
    setName(nameField);
  };

  const handleEmail = (event) => {
    const emailField = event.target.value;
    setEmailError(!emailField.match(EmailPattern));
    setEmail(emailField);
  };

  const handlePassword = (event) => {
    const passwordField = event.target.value;
    setLowercaseError(!passwordField.match(lowercaseRegex));
    setUppercaseError(!passwordField.match(uppercaseRegex));
    setSpecialCharError(!passwordField.match(specialCharRegex));
    setNumberError(!passwordField.match(numberRegex));
    setPassword(passwordField);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (
      name.length < 3 ||
      !email.match(EmailPattern) ||
      !password.match(lowercaseRegex) ||
      !password.match(uppercaseRegex) ||
      !password.match(specialCharRegex) ||
      !password.match(numberRegex)
    ) {
      sweetalert.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please check your input and try again!',
      });
    } else {
      sweetalert.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'You have successfully logged in!',
      });
    }
  };

  return (
    <div className="wrapper">
      <div className="image-holder">
        <img src="" alt="" />
      </div>
      <div className="form-inner">
        <form action="" onSubmit={handleLogin}>
          <div className="form-header">
            <h3>Login </h3>
            <img src={signUpIcon} alt="" className="sign-up-icon" />
          </div>
          <div className="form-group">
            <label htmlFor="">Username:</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={name}
              onChange={handleName}
            />
            <br></br>
            {nameError ? <span className="text-danger">Name must be greater than 2 characters</span> : ''}
          </div>
          <div className="form-group">
            <label htmlFor="">E-mail:</label>
            <input
              type="email"
              name="email"
              placeholder="Username@gmail.com"
              value={email}
              onChange={handleEmail}
            />
            <br></br>
            {emailError ? <span className="text-danger">Invalid Email</span> : ''}
          </div>
          <div className="form-group">
            <label htmlFor="">Password:</label>
            <input
              className="pas"
              type="password"
              name="password"
              placeholder="············"
              value={password}
              onChange={handlePassword}
            />

            <span>
              <ul>
                {lowercaseError ? <li className="text-danger">Must include lowercase</li> : null}
                {uppercaseError ? <li className="text-danger">Must include uppercase</li> : null}
                {specialCharError ? <li className="text-danger">Must include special character</li> : null}
                {numberError ? <li className="text-danger">Must include a number</li> : null}
              </ul>
            </span>
          </div>
          <button>create my account</button>
          <div className="socials">
            <p>Sign up with social platforms</p>
            <a href="" className="socials-icon">
              <i className="zmdi zmdi-facebook"></i>
            </a>
            <a href="" className="socials-icon">
              <i className="zmdi zmdi-instagram"></i>
            </a>
            <a href="" className="socials-icon">
              <i className="zmdi zmdi-twitter"></i>
            </a>
            <a href="" className="socials-icon">
              <i className="zmdi zmdi-tumblr"></i>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Validation;
