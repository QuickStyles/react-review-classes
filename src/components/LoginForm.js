import React from 'react';

function LoginForm(props) {
  const { loginData, updateLoginData, handleLogin } = props;

  function handleInputChange(event) {
    console.log(event.target.value);
    console.log(event.target.name);
    const newLoginData = {
      [event.target.name]: event.target.value
    }
    updateLoginData(newLoginData)
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleLogin();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" >Email</label>
        <input type='email' name='email' value={loginData.email} onChange={(event) => { handleInputChange(event) }}/>
      </div>
      <div>
        <label htmlFor ="password">Password</label>
        <input type="password" name='password' value={loginData.password} onChange={(event) => { handleInputChange(event) }}/>
      </div>
      <div>
        <input type='submit' value='Login'/>
      </div>
    </form>
  )
}

export default LoginForm

// yes
