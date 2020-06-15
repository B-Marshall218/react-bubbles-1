import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", credentials)
      .then(res => {
        console.log("data form the log in: ", res)
        localStorage.setItem("token", res.data.payload)
        props.history.push("/BubblePage")
        // props.setCredentials(res.data) 
        //both of the ^^ work. What is the difference? 
      })
      .catch(err => {
        console.error(err.response)
      })
  }


  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>

      <h2>Login</h2>
      <form onSubmit={login}>

        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          placeholder="username"
        />

        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="password"
        />
        <button type="submit">Log in</button>
      </form>
    </>
  );
};

export default Login;
