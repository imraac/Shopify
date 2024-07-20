import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Login = () => {
  const [handsStyle, setHandsStyle] = useState({ marginTop: '110%' });
  const [animconStyle, setAnimconStyle] = useState({
    backgroundImage: 'url(https://raw.githubusercontent.com/naaficodes/Monkey-Login/master/images/monkey.gif)',
  });

  const closeEye = () => {
    setAnimconStyle({
      backgroundImage: 'url(https://raw.githubusercontent.com/naaficodes/Monkey-Login/master/images/monkey_pwd.gif)',
    });
    setHandsStyle({ marginTop: '0%' });
  };

  const openEye = () => {
    setAnimconStyle({
      backgroundImage: 'url(https://raw.githubusercontent.com/naaficodes/Monkey-Login/master/images/monkey.gif)',
    });
    setHandsStyle({ marginTop: '110%' });
  };

  const validateForm = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    // Save the user credentials in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    window.location.href = '../home(after-login).html';
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: 'url(https://images.unsplash.com/photo-1549816115-fe3dbef80a23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
  };

  const monkeyLoginStyle = {
    width: '559px',  // Increased width
    height: '500px', // Increased height
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'transparent', // Set background color to transparent
    borderRadius: '40px',
  };

  const animconStyleCombined = {
    backgroundColor: 'rgb(32, 32, 32)',
    overflow: 'hidden',
    marginTop: '20px',
    height: '170px',
    width: '170px',
    borderRadius: '50%',
    backgroundSize: '90% 85%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    ...animconStyle,
  };

  const imgStyle = {
    marginTop: '110%',
    height: '170px',
    width: '170px',
    transition: '1s',
    ...handsStyle,
  };

  const formConStyle = {
    marginTop: '38px',
  };

  const inputStyle = {
    height: '40px',
    width: '300px',
    borderRadius: '20px',
    border: 'none',
    color: '#5a5449',
    textIndent: '15px',
    fontSize: '100%',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    outline: 'none',
  };

  const inputPlaceholderStyle = {
    color: 'rgb(49, 18, 18)',
    fontSize: '100%',
    fontWeight: 'lighter',
    textIndent: '15px',
  };

  const submitButtonStyle = {
    textIndent: '0px',
    height: '40px',
    width: '300px',
    marginTop: '10px',
    backgroundColor: '#1b8c1b99',
    transition: '2s',
    border: 'none',
    color: 'white',
    fontWeight: 'bolder',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    outline: 'none',
  };

  const submitButtonHoverStyle = {
    color: '#5a5449',
    cursor: 'pointer',
  };

  const footerStyle = {
    color: '#fffbf4',
    fontWeight: 'lighter',
    marginTop: '40px',
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={{ ...monkeyLoginStyle, ...contentStyle }}>
        <div id="animcon" style={animconStyleCombined}>
          <img id="hands" src="https://raw.githubusercontent.com/naaficodes/Monkey-Login/master/images/hands.png" style={imgStyle} alt="hands" />
        </div>
        <div style={formConStyle}>
          <form name="loginForm" onSubmit={validateForm}>
            <input type="email" id="mail" name="username" onClick={openEye} style={inputStyle} placeholder="Email" autoComplete="off" />
            <br />
            <br />
            <input type="password" id="pwdbar" onClick={closeEye} name="password" style={inputStyle} placeholder="Password" />
            <br />
            <br />
            <input type="submit" style={{ ...submitButtonStyle, ':hover': submitButtonHoverStyle }} value="L O G I N" />
          </form>
        </div>
        <footer style={footerStyle}>
          <a style={{ color: '#bababa', textDecoration: 'none' }} href="https://github.com/imraac">@imraac</a>
        </footer>
      </div>
    </div>
  );
};

export default Login;
