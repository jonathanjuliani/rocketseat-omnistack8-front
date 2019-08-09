import React, { useState } from "react";
import logo from "../assets/logo.svg";
import api from "../services/api";
import "./Login.css";

const Login = ({ history }) => {
  const [username, setUsername] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(username);

    const response = await api.post("/devs", {
      username,
    });

    console.log("response", response);
    const { _id } = response.data;

    history.push(`/dev/${_id}`);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="tindev" />
        <input placeholder="Usuário do github" value={username} onChange={e => setUsername(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Login;
