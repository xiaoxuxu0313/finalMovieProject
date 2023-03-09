import React, { useContext, useState } from 'react';
import axios from 'axios';
import { API_KEY } from '../api';
import Context from './Context';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  // const { user, setUser } = useContext(Context);
  // const { setFavoriteList } = useContext(React.createContext({}));
  // const { setRatedList } = useContext(React.createContext({}));
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [loggedin, setLoggedin] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    console.log(e.target.value);
    setUsernameInput(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPasswordInput(e.target.value);
    //console.log(passwordInput);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(usernameInput, passwordInput);
  };

  const login = async (username, password) => {
    try {
      setLoading(true);
      const {
        data: { request_token },
      } = await axios.get(
        `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`
      );
      await axios.post(
        `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${API_KEY}`,
        {
          username,
          password,
          request_token,
        }
      );
      const {
        data: { session_id },
      } = await axios.post(
        `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}`,
        { request_token }
      );
      axios.defaults.params = { ...axios.defaults.params, session_id };
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/account?api_key=${API_KEY}`
      );
      const userData = {
        username,
        accoundId: data.id,
        sessionId: session_id,
        requestToken: request_token,
      };
      s;
      setUser(userData);
      setLoggedin(true);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      alert('Failed to login');
    }
  };

  // const login = async (username, password) => {
  //   try {
  //     setLoading(true);
  //     const {
  //       data: { request_token },
  //     } = await client.get(`/authentication/token/new`);
  //     await client.post('/authentication/token/validate_with_login', {
  //       username,
  //       password,
  //       request_token,
  //     });
  //     const {
  //       data: { session_id },
  //     } = await client.post(`/authentication/session/new`, { request_token });
  //     client.defaults.params = { ...client.defaults.params, session_id };
  //     const { data } = await client.get('/account');
  //     const userData = {
  //       username,
  //       accountId: data.id,
  //       sessionId: session_id,
  //       requestToken: request_token,
  //     };
  //     localStorage.setItem('user', JSON.stringify(userData));
  //     setUser(userData);
  //     setLoading(false);
  //     //console.log(userData);
  //   } catch (e) {
  //     setLoading(false);
  //     throw e;
  //   }
  // };

  return loggedin ? (
    navigate('/HOME')
  ) : loading ? (
    <div>Loading...</div>
  ) : (
    <div className="loginContainer">
      <div className="mainBody">
        <br />
        <br />
        <div className="loginTextContainer">
          <h1>Login</h1>
        </div>
        <br />
        <label className="loginInputName">
          {/* <label className="loginInputName" for="username"> */}
          Username
        </label>
        <input
          className="input"
          type="text"
          // id="username"
          name="username"
          value={usernameInput}
          onChange={handleUsernameChange}
        />
        <br />
        <label className="loginInputName">Password</label>
        <input
          className="input"
          type="password"
          // id="password"
          name="password"
          value={passwordInput}
          onChange={handlePasswordChange}
        />
        <br />
        <button className="submitButton" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}
