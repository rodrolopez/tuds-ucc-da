import React from 'react'

const Login = () => {
  return (
    <div>
      <ul>
        <li>
          <label> Nombre de Usuario</label>    
          <input name='username'/>
        </li>
        <li>
          <label> Contraseña</label>    
          <input name='password' type='password'/>
        </li>
      </ul>
    </div>
  )
}

export default Login

