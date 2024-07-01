import React, { useState } from 'react';
import './login.css';

const urlBase = 'http://localhost:4000/api/login';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const response = await fetch(`${urlBase}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Usuario o contraseña incorrectos');
      }

      const json = await response.json();
      console.log(json.authorizationToken);

      // Verificar el usuario y contraseña específicos
      if (username === 'admin' && password === '1234') {
        setSuccessMessage('¡Bienvenido!');
      } else {
        setSuccessMessage('');
      }

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label> Nombre de Usuario</label>
        <input
          name='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label> Contraseña</label>
        <input
          name='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Iniciar Sesión</button>

        {error && <p className="login-message login-error">{error}</p>}
        {successMessage && <p className="login-message login-success">{successMessage}</p>}
      </form>
    </div>
  );
};

export default Login;


