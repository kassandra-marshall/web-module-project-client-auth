import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
    const { push } = useHistory();
    const [cred, setCred] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', cred)
        .then(res => {
            localStorage.setItem("token", res.data.token)
            push('/friends');
        })
        .catch(err => console.log(err))
    }
    
    return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>USERNAME:</label>
          <input onChange={handleChange} id='username' type='text' name='username'/>
        </div>
        <div>
          <label htmlFor='password'>PASSWORD:</label>
          <input onChange={handleChange} id='password' type='password' name='password'/>
        </div>
        <button>SUBMIT</button>
      </form>
    </div>
   )
 }

  export default Login;