import React from 'react'

const urlBase = 'http://localhost:4000/api/login'
function login(evt) {
  evt.preventDefault();

  const data = {
    username: evt.target.username.value,
    password: evt.target.password.value
  }
  console.log(data);

  fetch(
    `${urlBase}/login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  ).then(res => res.json())
    .then(json => console.log(json.authorizationToken))

}
const Login = () => {
  return (
    <div>
      <form onSubmit={login}>
        <ul>
          <li>
            <label> Nombre de Usuario</label>
            <input name='username' />
          </li>
          <li>
            <label> Contraseña</label>
            <input name='password' type='password' />
          </li>
        </ul>
      </form>
    </div>
  )
}

export default Login

