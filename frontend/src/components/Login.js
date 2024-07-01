import React from 'react';
import './Login.css';

const Login = () => {
  const urlBase = 'http://localhost:4000/api/login';

  const login = (evt) => {
    evt.preventDefault();

    const data = {
      username: evt.target.username.value,
      password: evt.target.password.value
    };

    console.log(data);

    fetch(`${urlBase}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => console.log(json.authorizationToken));
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-form">
          <h2 className="login-form-title">Inicio de Sesión</h2>
          <form onSubmit={login}>
            <ul>
              <li>
                <label>Nombre de Usuario</label>
                <input className="login-form-input" name="username" required />
              </li>
              <li>
                <label>Contraseña</label>
                <input className="login-form-input" name="password" type="password" required />
              </li>
            </ul>
            <button className="login-form-button" type="submit">Iniciar Sesión</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
